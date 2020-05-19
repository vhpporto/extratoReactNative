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
  ContainerRegistro,
} from './styles';
import api from '../../services/api';
import {useDispatch} from 'react-redux';
import {loggin} from '../../actions/user';

const Login = ({navigation}) => {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    id: null,
    dataCadastro: null,
    email: null,
    password: null,
  });

  const login = async () => {
    const response = await api.post('/login', {
      email: user.email,
      password: user.password,
    });
    const [{erro, resultado, id, nome, dataCadastro}] = response.data;
    if (erro === 0) {
      dispatch(loggin({...user, id, nome, dataCadastro}));
      navigation.navigate('Home');
    } else {
      Alert.alert(`${resultado}`, '');
    }
  };

  return (
    <Container>
      <InputUser
        placeholder="Email"
        autoCapitalize="none"
        onChangeText={email => setUser({...user, email})}
      />
      <InputPassword
        placeholder="Senha"
        secureTextEntry={true}
        onChangeText={password => setUser({...user, password})}
      />
      <ButtonLogin onPress={login}>
        <TextButton>Acessar</TextButton>
      </ButtonLogin>

      <ButtonRegister>
        <TextButtonRegister onPress={() => navigation.navigate('Senha')}>
          Esqueceu a senha ?
        </TextButtonRegister>
      </ButtonRegister>

      <ContainerRegistro>
        <ButtonRegister>
          <TextButtonRegister onPress={() => navigation.navigate('Cadastro')}>
            Criar uma conta
          </TextButtonRegister>
        </ButtonRegister>
      </ContainerRegistro>
    </Container>
  );
};

export default Login;
