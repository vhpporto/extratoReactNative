import React, {Component} from 'react';
import {
  View,
  Text,
  Picker,
  Keyboard,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Alert,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import RNPickerSelect from 'react-native-picker-select';
import {CheckBox} from 'react-native-elements';
import categorias from '../../components/Categoria';
import Icon from 'react-native-vector-icons/Ionicons';
import api from '../../services/api';
import moment from 'moment';
import 'moment/locale/pt-br';

import {
  Container,
  KeyboardView,
  BackButton,
  Title,
  InputDescription,
  CheckBoxContainer,
  FormContainer,
  ButtonCalendar,
  ContainerCalendar,
  TextDate,
  TextDateSelected,
  ButtonSave,
  InputValue,
  PickSelector,
  TextButtonSave,
} from './styles';

const DismissKeyboard = ({children}) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default class index extends Component {
  constructor(props) {
    super(props);
    this.inputRefs = {};
    this.state = {
      id: this.props.navigation.getParam('id') || null,
      tipoMovimentacao: this.props.navigation.getParam('entrada'),
      saida: this.props.navigation.getParam('entrada') == 0 ? true : false,
      entrada: this.props.navigation.getParam('entrada') == 0 ? false : true,
      data:
        moment(this.props.navigation.getParam('data')).format('L') ||
        moment().format('L'),
      calendarVisible: false,
      tipoCategoria: this.props.navigation.getParam('categoria') || 1,
      descricao: this.props.navigation.getParam('descricao') || null,
      valor: this.props.navigation.getParam('valor') || null,
      categorias: categorias,
      showPicker: false,
      favSport: null,
    };
  }

  componentDidMount() {
    const {tipoMovimentacao} = this.state;
    console.log(tipoMovimentacao);
  }

  formataValorReal = valor => {
    let valorFormatado = valor.replace(/\D+/g, '');
    let valor2 = valorFormatado.replace('R$', '');
    this.setState({valor: valor2});
  };

  insereMovimentacao = async () => {
    const dataFormatada = this.state.data.split('/');
    const response = await api.post('/novamovimentacao', {
      valor: this.state.valor,
      descricao: JSON.stringify(this.state.descricao),
      data: dataFormatada[2] + '-' + dataFormatada[1] + '-' + dataFormatada[0],
      entrada: this.state.tipoMovimentacao,
      categoria: this.state.tipoCategoria,
    });
    const [{erro, resultado}] = response.data;
    if (erro == 0) {
      await this.setState({
        valor: null,
        descricao: null,
        data: moment().format('L'),
        entrada: null,
        saida: null,
        tipoCategoria: 1,
        tipoMovimentacao: null,
      });
      Alert.alert(`${resultado}! Deseja lançar uma nova movimentação ?`, '', [
        {
          text: 'Não',
          onPress: () => this.props.navigation.navigate('Extrato'),
        },
        {text: 'Sim'},
      ]);
    } else {
      Alert.alert(`${resultado}`);
    }
  };

  handleEntradaCheckBox() {
    if (!this.state.entrada) {
      this.setState({entrada: true, saida: false, tipoMovimentacao: 1});
    } else {
      this.setState({
        entrada: !this.state.entrada,
        saida: false,
        tipoMovimentacao: null,
      });
    }
  }

  handleSaidaCheckBox() {
    if (!this.state.saida) {
      this.setState({saida: true, entrada: false, tipoMovimentacao: 0});
    } else {
      this.setState({
        saida: !this.state.saida,
        entrada: false,
        tipoMovimentacao: null,
      });
    }
  }

  render() {
    return (
      <KeyboardView behavior="padding">
        <StatusBar
          barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
        />
        <DismissKeyboard>
          <Container>
            <BackButton onPress={() => this.props.navigation.goBack()}>
              <Icon name="md-arrow-back" size={30} />
            </BackButton>
            <Title>Nova movimentação</Title>
            <CheckBoxContainer>
              <CheckBox
                center
                containerStyle={{
                  borderWidth: 0,
                  backgroundColor: 'transparent',
                }}
                title="Entrada"
                onPress={() => this.handleEntradaCheckBox()}
                checked={this.state.entrada}
              />
              <CheckBox
                center
                containerStyle={{
                  borderWidth: 0,
                  backgroundColor: 'transparent',
                }}
                title="Saída"
                onPress={() => this.handleSaidaCheckBox()}
                checked={this.state.saida}
              />
            </CheckBoxContainer>

            <FormContainer>
              <RNPickerSelect
                placeholder={{
                  label: 'Categoria',
                  value: null,
                }}
                items={this.state.categorias}
                onValueChange={value => {
                  this.setState({
                    tipoCategoria: value,
                  });
                }}
                onUpArrow={() => {
                  this.inputRefs.picker.togglePicker();
                }}
                onDownArrow={() => {
                  this.inputRefs.company.focus();
                }}
                style={{...pickerSelectStyles}}
                value={this.state.tipoCategoria}
                ref={el => {
                  this.inputRefs.picker2 = el;
                }}
              />

              <InputDescription
                value={this.state.descricao}
                clearButtonMode="while-editing"
                onChangeText={descricao => this.setState({descricao})}
                placeholder="Descrição"
              />

              <InputValue
                type={'money'}
                placeholder="Valor R$"
                returnKeyLabel="Ok"
                returnKeyType="done"
                options={{
                  precision: 2,
                  separator: ',',
                  delimiter: '.',
                  // unit: "R$",
                  suffixUnit: '',
                }}
                value={this.state.valor}
                onChangeText={valor => {
                  this.formataValorReal(valor);
                }}
              />

              <ButtonCalendar
                onPress={() => this.setState({calendarVisible: true})}>
                <ContainerCalendar>
                  <TextDate>Data</TextDate>
                  <TextDateSelected>{this.state.data}</TextDateSelected>
                </ContainerCalendar>
              </ButtonCalendar>

              <ButtonSave onPress={() => this.insereMovimentacao()}>
                <TextButtonSave>Salvar</TextButtonSave>
              </ButtonSave>

              <DateTimePickerModal
                isVisible={this.state.calendarVisible}
                headerTextIOS="Data de lançamento"
                locale="pt-BR"
                mode="date"
                // onConfirm={(date) => console.log(date)}
                onConfirm={date => {
                  this.setState({
                    data: moment(date).format('L'),
                    calendarVisible: false,
                  }),
                    Keyboard.dismiss();
                }}
                onCancel={() => this.setState({calendarVisible: false})}
              />
            </FormContainer>
          </Container>
        </DismissKeyboard>
      </KeyboardView>
    );
  }
}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingTop: 13,
    paddingBottom: 12,
    borderBottomWidth: 0.5,
    width: '90%',
    alignSelf: 'center',
    borderColor: '#ddd',
    borderRadius: 4,
    backgroundColor: 'transparent',
    color: 'black',
  },
  underline: {
    borderTopWidth: 0,
    backgroundColor: 'red',
  },
});