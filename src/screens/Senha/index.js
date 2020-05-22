import React, {useState, useRef} from 'react';
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
  const [codigo, setCodigo] = useState(Array.from(4));

  const input1 = useRef();
  const input2 = useRef();
  const input3 = useRef();
  const input4 = useRef();

  const [user, setUser] = useState({
    id: null,
    dataCadastro: null,
    email: null,
    password: null,
  });
  const [modalVisible, setModalVisible] = useState(false);

  function newPassword() {
    for (const cod in codigo) {
      console.log(cod);
    }
  }

  const esqueceuSenha = async () => {
    const response = await api.post('/esqueceusenha', {
      email: user.email,
    });
    const [{resultado, erro}] = response.data;
    if (erro === 0) {
      console.log(response.data);
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
            <InputNumber
              textAlign={'center'}
              keyboardType="decimal-pad"
              onChangeText={newPassword}
              maxLength={1}
              onKeyPress={() => input2.ref}
              ref={input1}
            />
            <InputNumber
              textAlign={'center'}
              keyboardType="decimal-pad"
              ref={input2}
              onChangeText={newPassword}
              maxLength={1}
            />
            <InputNumber
              textAlign={'center'}
              keyboardType="decimal-pad"
              onChangeText={newPassword}
              maxLength={1}
            />
            <InputNumber
              textAlign={'center'}
              keyboardType="decimal-pad"
              onChangeText={newPassword}
              maxLength={1}
            />
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
