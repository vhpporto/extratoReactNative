import React, {useState, useEffect, useRef} from 'react';
import {
  Alert,
  StatusBar,
  TouchableWithoutFeedback,
  FlatList,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import api from '../../services/api';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconCategory from '../../components/Icons';
import moment from 'moment';
import 'moment/locale/pt-br';
import {Modalize} from 'react-native-modalize';
import {
  Container,
  ContainerSaldo,
  ContainerExtratoButtonAdd,
  TextExtrato,
  ButtonAdd,
  TextSaldo,
  TextSaldoValor,
  TextDate,
  ContainerButtons,
  ButtonFilter,
  TextMes,
  ContainerMes,
  IconContainer,
  DescContainer,
  Description,
  Date,
  ValueContainer,
  Value,
  ContainerEmpty,
  TextSemRegistro,
  ButtonMenu,
  TitleModal,
  DescModal,
  ValueModal,
} from './styles';
Icon.loadFont();
const diaAtual = moment().format('LLLL');
const diaAtualFormatado = diaAtual.split('às');

const Home = ({navigation}) => {
  const [item, setItem] = useState({});
  const modalizeRef = useRef(null);
  const userInfo = useSelector(state => state.user);
  const [loading, setLoading] = useState(true);
  const [extrato, setExtrato] = useState(null);
  const [saldoExtrato, setSaldoExtrato] = useState('0.00');
  const [filtroExtrato, setFiltroExtrato] = useState([]);
  const [buttonMes, setButtonMes] = useState(true);
  const [buttonPeriodo, setButtonPeriodo] = useState(false);
  const [extratoMes, setExtratoMes] = useState(true);
  const [extratoPeriodo, setExtratoPeriodo] = useState(false);

  const onOpen = item => {
    setItem(item);
    modalizeRef.current?.open();
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getExtrato();
    });
    getExtrato();
    console.log(userInfo.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handlePressMes() {
    setButtonMes(true);
    setButtonPeriodo(false);
  }

  function handlePressPeriodo() {
    setButtonMes(false);
    setButtonPeriodo(true);
  }

  async function removeMovimentacao(id, movimentacao) {
    const response = await api.delete(`/delete/${id}/${movimentacao}`);
    const [{erro, resultado}] = response.data;
    if (erro === 0) {
      getExtrato();
    } else {
      Alert.alert(`${resultado}`);
    }
  }

  async function getExtrato() {
    const response = await api.post('/extrato', {
      id: userInfo.id,
    });
    const {data} = response;

    if (data.length < 1) {
      setExtrato(null);
      setLoading(false);
      return false;
    } else {
      const indexSaldo = data.length - 1;
      const saldo = data[indexSaldo].Saldo;
      setExtrato(data);
      setFiltroExtrato(data);
      setSaldoExtrato(
        saldo
          ? parseFloat(saldo.toFixed(2)).toLocaleString('pt-BR', {
              currency: 'BRL',
              minimumFractionDigits: 2,
            })
          : '0.00',
      );
      setLoading(false);
    }
  }

  return (
    <Container>
      <StatusBar barStyle="light-content" />

      <LinearGradient
        start={{x: 1, y: 0}}
        end={{x: 1, y: 1}}
        colors={['#413D4F', '#191825']}
        style={{padding: 30, height: 280, width: '100%'}}>
        <ContainerSaldo>
          <TextExtrato>Extrato</TextExtrato>
          <TextSaldo>MEU SALDO</TextSaldo>
          <TextSaldoValor>R$ {saldoExtrato}</TextSaldoValor>
        </ContainerSaldo>
        <TextDate>{diaAtualFormatado[0]}</TextDate>
      </LinearGradient>

      <ContainerButtons>
        <ButtonFilter press={buttonMes}>
          <TouchableWithoutFeedback onPress={() => handlePressMes()}>
            <TextMes>Este mês</TextMes>
          </TouchableWithoutFeedback>
        </ButtonFilter>
        <ButtonFilter press={buttonPeriodo}>
          <TouchableWithoutFeedback onPress={() => handlePressPeriodo()}>
            <TextMes>Escolher período</TextMes>
          </TouchableWithoutFeedback>
        </ButtonFilter>
      </ContainerButtons>

      <FlatList
        data={extrato}
        keyExtractor={(item, index) => String(index)}
        renderItem={({item}) => {
          return (
            <ContainerMes>
              <IconContainer>
                <IconCategory name={item.Nome} />
              </IconContainer>
              <DescContainer>
                <TouchableOpacity
                  onPress={() => onOpen(item)}
                  onLongPress={() =>
                    Alert.alert(
                      'Excluir movimentação',
                      `Deseja mesmo excluir "${item.Descricao}"`,
                      [
                        {text: 'Não'},
                        {
                          text: 'Sim',
                          onPress: () =>
                            removeMovimentacao(item.id_Usuario, item.id),
                        },
                      ],
                    )
                  }>
                  <Description>{item.Descricao}</Description>
                  <Date>{moment(item.Data_Lancamento).format('L')}</Date>
                </TouchableOpacity>
              </DescContainer>
              <ValueContainer>
                <Value>
                  R${' '}
                  {parseFloat(item.Valor.toFixed(2)).toLocaleString('pt-BR', {
                    currency: 'BRL',
                    minimumFractionDigits: 2,
                  })}
                </Value>
              </ValueContainer>
            </ContainerMes>
          );
        }}
      />
      <ButtonAdd
        // animation="pulse"
        // useNativeDriver
        // iterationCount="infinite"
        // duration={800}
        onPress={() => navigation.navigate('Lancamento')}>
        <Icon name="plus" size={35} color="#FFF" />
      </ButtonAdd>
      <Modalize
        modalStyle={
          {
            // alignItems: 'center',
          }
        }
        childrenStyle={{
          width: '90%',
          marginTop: 30,
          alignSelf: 'center',
          padding: 20,
          // alignItems: 'center',
        }}
        ref={modalizeRef}
        snapPoint={Dimensions.get('window').height / 2}>
        <TitleModal>Movimentação</TitleModal>
        <DescModal>{moment(item.Data_Lancamento).format('L')}</DescModal>
        <DescModal>{item.Descricao}</DescModal>
        <ValueModal>R$ {item.Valor}</ValueModal>
      </Modalize>
    </Container>
  );
};

export default Home;
