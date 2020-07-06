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
import {RefreshControl} from 'react-native';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const [password, setPassword] = useState();
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

  const getFocusInput1 = () => {
    input1.current.focus();
  };
  const getFocusInput2 = () => {
    input2.current.focus();
  };
  const getFocusInput3 = () => {
    input3.current.focus();
  };
  const getFocusInput4 = () => {
    input4.current.focus();
  };

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
              onChangeText={number => {
                setPassword([...password, number]);
                if (number) {
                  getFocusInput2();
                }
              }}
              maxLength={1}
              ref={input1}
            />
            <InputNumber
              textAlign={'center'}
              keyboardType="decimal-pad"
              ref={input2}
              onChangeText={number => {
                setPassword([...password, number]);
                if (number) {
                  getFocusInput3();
                } else {
                  getFocusInput1();
                }
              }}
              maxLength={1}
            />
            <InputNumber
              textAlign={'center'}
              keyboardType="decimal-pad"
              on
              onChangeText={number => {
                setPassword([...password, number]);
                if (number) {
                  getFocusInput4();
                } else {
                  getFocusInput2();
                }
              }}
              ref={input3}
              maxLength={1}
            />
            <InputNumber
              textAlign={'center'}
              keyboardType="decimal-pad"
              ref={input4}
              onChangeText={number => {
                setPassword([...password, number]);
                if (!number) {
                  getFocusInput3();
                  console.log(password);
                }
              }}
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
