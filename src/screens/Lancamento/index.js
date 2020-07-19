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
import RNPickerSelect from 'react-native-picker-select';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {CheckBox} from 'react-native-elements';
import categorias from '../../components/Categoria';
import Icon from 'react-native-vector-icons/Ionicons';
import api from '../../services/api';
import moment from 'moment';
import {connect} from 'react-redux';
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
  CalendarModal,
  ContainerModalCalendar,
} from './styles';

Icon.loadFont();

const DismissKeyboard = ({children}) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

class index extends Component {
  constructor(props) {
    super(props);
    this.inputRefs = {};
    this.state = {
      id: null,
      tipoMovimentacao: null,
      saida: null,
      entrada: null,
      data: moment().format('L'),
      calendarVisible: false,
      tipoCategoria: 1,
      descricao: null,
      valor: null,
      categorias: categorias,
      showPicker: false,
      favSport: null,
      dateSelected: null,
    };
  }

  componentDidMount() {
    const {tipoMovimentacao} = this.state;
    console.log(tipoMovimentacao);
  }

  handleDate = day => {
    this.setState({
      dateSelected: {
        [day.dateString]: {
          selected: true,
          selectedColor: 'red',
        },
      },

      data: moment(day.dateString).format('L'),
    });
    setTimeout(() => {
      this.setState({calendarVisible: !this.state.calendarVisible});
    }, 200);
  };

  formataValorReal = valor => {
    let valorFormatado = valor.replace(/\D+/g, '');
    let valor2 = valorFormatado.replace('R$', '');
    this.setState({valor: valor2});
  };

  insereMovimentacao = async () => {
    const dataFormatada = this.state.data.split('/');
    const response = await api.post('/novamovimentacao', {
      id: this.props.id,
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
          onPress: () => this.props.navigation.navigate('Home'),
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
              <CalendarModal
                visible={this.state.calendarVisible}
                transparent={true}
                animated={true}>
                <ContainerModalCalendar>
                  <Calendar
                    markedDates={this.state.dateSelected}
                    onDayPress={day => this.handleDate(day)}
                  />
                </ContainerModalCalendar>
              </CalendarModal>

              <RNPickerSelect
                placeholder={{
                  label: 'Categoria',
                }}
                onValueChange={tipoCategoria => this.setState({tipoCategoria})}
                items={categorias}
                value={this.state.tipoCategoria}
                style={pickerSelectStyles}
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
            </FormContainer>
          </Container>
        </DismissKeyboard>
      </KeyboardView>
    );
  }
}

const mapStateToProps = ({user}) => {
  return {
    id: user.id,
  };
};

export default connect(
  mapStateToProps,
  null,
)(index);

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
