import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  margin-top: ${Dimensions.get('window').height / 3}px;
`;

export const InputUser = styled.TextInput`
  margin: 10px;
  height: 40px;
  width: 80%;
  border-radius: 4px;
  padding-left: 20px;
  border-width: 0.5px;
`;

export const InputPassword = styled.TextInput`
  height: 40px;
  width: 80%;
  border-radius: 4px;
  padding-left: 20px;
  border-width: 0.5px;
`;

export const ButtonRegister = styled.TouchableOpacity`
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
