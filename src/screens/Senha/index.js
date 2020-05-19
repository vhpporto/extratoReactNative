import React, {useState} from 'react';
import {Alert, Button, View, Text} from 'react-native';
import {
  Container,
  InputUser,
  InputPassword,
  ButtonLogin,
  TextButton,
  ButtonRegister,
  TextButtonRegister,
  ContainerRegistro,
  ContainerModal,
  InputNumber,
  TextCodigo,
} from './styles';
import api from '../../services/api';
import Modal from 'react-native-modal';
import {useDispatch} from 'react-redux';

const Login = ({navigation}) => {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    id: null,
    dataCadastro: null,
    email: null,
    password: null,
  });
  const [modalVisible, setModalVisible] = useState(false);

  const esqueceuSenha = async () => {
    const response = await api.post('/esqueceusenha', {
      email: user.email,
    });
    const [{resultado, erro}] = response.data;
    if (erro === 0) {
      setModalVisible(true);
      // navigation.navigate('Login');
    } else {
      Alert.alert(`${resultado}`, '');
    }
  };

  return (
    <Container>
      <Modal isVisible={modalVisible}>
        <View
          style={{
            backgroundColor: '#FFF',
            height: 350,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>Insira o código recebido em seu email</Text>
          <View style={{flexDirection: 'row', maring: 10, marginTop: 30}}>
            <InputNumber textAlign={'center'} />
            <InputNumber textAlign={'center'} />
            <InputNumber textAlign={'center'} />
            <InputNumber textAlign={'center'} />
          </View>
          <View style={{flexDirection: 'column', marginTop: 40}}>
            <Button
              title="Voltar"
              onPress={() => setModalVisible(!modalVisible)}
            />
          </View>
        </View>
      </Modal>
      <InputUser
        placeholder="Email"
        onChangeText={email => setUser({...user, email})}
      />

      <ButtonLogin onPress={esqueceuSenha}>
        <TextButton>Enviar</TextButton>
      </ButtonLogin>
    </Container>
  );
};

export default Login;
