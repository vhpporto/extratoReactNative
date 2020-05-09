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
import {connect, useDispatch, useSelector} from 'react-redux';
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
        placeholder="Usuário"
        onChangeText={userName => setUser({...user, nome: userName})}
      />
      <InputPassword
        placeholder="Senha"
        onChangeText={password => setUser({...user, password: password})}
      />
      <ButtonLogin onPress={login}>
        <TextButton>Acessar</TextButton>
      </ButtonLogin>
      <ButtonLogin onPress={() => console.log(user)}>
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

const mapStateToProps = ({user}) => {
  console.log(user);
  return {user};
};

export default connect(mapStateToProps)(Login);
