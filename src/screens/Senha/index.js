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
    nome: null,
    password: null,
  });

  const login = async () => {
    const response = await api.post('/login', {
      user: user.nome,
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
        onChangeText={nome => setUser({...user, nome})}
      />

      <ButtonLogin onPress={login}>
        <TextButton>Enviar</TextButton>
      </ButtonLogin>
    </Container>
  );
};

export default Login;
