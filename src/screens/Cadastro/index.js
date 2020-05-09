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

const Cadastro = ({navigation}) => {
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);

  async function registro() {
    const response = await api.post('/registro', {
      user: user,
      password: password,
    });
    const [{erro, resultado}] = response.data;
    if (erro === 0) {
      Alert.alert(`${resultado}`, '', [
        {
          text: 'Ok',
          onPress: () => navigation.navigate('Home'),
        },
      ]);
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
      <ButtonRegister onPress={registro}>
        <TextButton>Registrar</TextButton>
      </ButtonRegister>
    </Container>
  );
};

export default Cadastro;
