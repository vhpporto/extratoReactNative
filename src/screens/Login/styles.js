import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  margin-top: ${Dimensions.get('window').height / 3}px;
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
  width: 70px;
  align-items: center;
  justify-content: center;
`;

export const TextButtonRegister = styled.Text`
  font-weight: 500;
`;
