import React, {useState} from 'react';
import {Alert} from 'react-native';
import {
  Container,
  InputUser,
  InputPassword,
  ButtonLogin,
  TextButton,
  ButtonRegister,
  TextButtonRegister,
} from './styles';
import api from '../../services/api';

const Login = ({navigation}) => {
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);

  async function login() {
    const response = await api.post('/login', {
      user: user,
      password: password,
    });
    const [{erro, resultado}] = response.data;
    if (erro === 0) {
      navigation.navigate('Home');
    } else {
      Alert.alert(`${resultado}`, '');
    }
  }

  return (
    <Container>
      <InputUser placeholder="Usuário" onChangeText={user => setUser(user)} />
      <InputPassword
        placeholder="Password"
        onChangeText={password => setPassword(password)}
      />
      <ButtonLogin onPress={login}>
        <TextButton>Acessar</TextButton>
      </ButtonLogin>
      <ButtonRegister>
        <TextButtonRegister onPress={() => navigation.navigate('Cadastro')}>
          Registar
        </TextButtonRegister>
      </ButtonRegister>
    </Container>
  );
};

export default Login;
