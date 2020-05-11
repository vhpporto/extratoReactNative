import React, {useState, useEffect} from 'react';
import {StatusBar} from 'react-native';
import {useSelector} from 'react-redux';
import api from '../../services/api';
import LinearGradient from 'react-native-linear-gradient';
import {
  Container,
  ContainerSaldo,
  ContainerExtratoButtonAdd,
  TextExtrato,
  ButtonAdd,
} from './styles';

const Home = ({navigation}) => {
  const userInfo = useSelector(state => state.user);
  const [loading, setLoading] = useState(true);
  const [extrato, setExtrato] = useState(null);
  const [saldoExtrato, setSaldoExtrato] = useState('0.00');
  const [filtroExtrato, setFiltroExtrato] = useState([]);

  useEffect(() => {
    console.log(userInfo);
    getExtrato();
  }, []);

  async function getExtrato() {
    const response = await api.get('/extrato');
    const {data} = response;

    if (data.length < 1) {
      setExtrato(null);
      setLoading(false);
      return false;
    } else {
      const indexSaldo = data.length - 1;
      const saldo = data[indexSaldo].Saldo;
      console.log(data);
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
          <ContainerExtratoButtonAdd>
            <TextExtrato>Extrato</TextExtrato>

            <ButtonAdd
              animation="pulse"
              useNativeDriver
              iterationCount="infinite"
              duration={800}
              onPress={() => navigation.navigate('Lancamento')}>
              {/* <AntDesign name="plus" size={35} color="#FFF" /> */}
            </ButtonAdd>
          </ContainerExtratoButtonAdd>
        </ContainerSaldo>
      </LinearGradient>
    </Container>
  );
};

export default Home;
