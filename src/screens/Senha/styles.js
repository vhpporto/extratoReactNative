import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  margin-top: ${Dimensions.get('window').height / 3}px;
`;

export const ContainerEmpty = styled(Container);

export const ContainerModal = styled.View`
  flex-direction: row;
  height: 300px;
  margin-top: ${Dimensions.get('window').height / 3}px;
  border-width: 1px;
  justify-content: center;
  align-self: center;
  width: 90%;
  border-radius: 20px;
`;

export const Modal = styled.Modal`
  height: 300px;
  align-items: center;
  width: 90%;
  justify-content: center;
  margin-top: 150px;
  background-color: blue;
`;

export const InputNumber = styled.TextInput`
  height: 60px;
  width: 50px;
  margin: 10px;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  align-self: center;
  border-radius: 20px;
  border-width: 0.5px;
`;
export const TextSemRegistro = styled.Text`
  color: #555;
  font-size: 23;
  align-self: center;
`;

export const InputUser = styled.TextInput`
  height: 40px;
  margin: 10px;
  border-color: #999;
  width: 80%;
  border-radius: 4px;
  padding-left: 20px;
  border-width: 0.3px;
`;

export const InputPassword = styled.TextInput`
  height: 40px;
  width: 80%;
  border-color: #999;
  border-radius: 4px;
  padding-left: 20px;
  border-width: 0.3px;
`;

export const ButtonLogin = styled.TouchableOpacity`
  margin-top: 10px;
  height: 40px;
  width: 80%;
  border-radius: 4px;
  background-color: #7200c1;
  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-weight: 500;
`;

export const ButtonRegister = styled.TouchableOpacity`
  height: 30px;
  /* width: 70px; */
  align-items: center;
  justify-content: center;
`;

export const TextButtonRegister = styled.Text`
  font-weight: 500;
`;

export const ContainerRegistro = styled.View`
  flex: 1;
  margin: 20px;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 30px;
`;

export const TextCodigo = styled.Text`
  font-size: 17px;
  color: #444;
  font-weight: 300;
`;
