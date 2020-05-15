import React, {useState} from 'react';
import {Alert} from 'react-native';
import {
  Container,
  InputUser,
  InputPassword,
  ButtonRegister,
  TextButton,
} from './styles';
import api from '../../services/api';
import {useDispatch} from 'react-redux';
import {loggin} from '../../actions/user';

const Cadastro = ({navigation}) => {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    id: null,
    dataCadastro: null,
    nome: null,
    email: null,
    password: null,
  });

  async function login() {
    const response = await api.post('/login', {
      email: user.email,
      password: user.password,
    });
    const [{erro, resultado, id, nome}] = response.data;
    if (erro === 0) {
      dispatch(loggin({...user, id, nome}));
      navigation.navigate('Home');
    } else {
      Alert.alert(`${resultado}`, '');
    }
  }

  async function registro() {
    const response = await api.post('/registro', {
      nome: user.nome,
      email: user.email,
      password: user.password,
    });
    const [{erro, resultado}] = response.data;
    if (erro === 0) {
      Alert.alert(`${resultado}`, '', [
        {
          text: 'Ok',
          onPress: () => login(),
        },
      ]);
    } else {
      Alert.alert(`${resultado}`, '');
    }
  }

  return (
    <Container>
      <InputUser
        placeholder="Nome"
        onChangeText={nome => setUser({...user, nome})}
      />
      <InputUser
        placeholder="Email"
        onChangeText={email => setUser({...user, email})}
      />
      <InputPassword
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={password => setUser({...user, password})}
      />
      <ButtonRegister onPress={registro}>
        <TextButton>Registrar</TextButton>
      </ButtonRegister>
    </Container>
  );
};

export default Cadastro;
