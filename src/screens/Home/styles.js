import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
export const Container = styled.View`
  flex: 1;
  align-items: center;
`;
export const ContainerSaldo = styled.View`
  flex: 1;
  margin-top: 30px;
`;

export const ContainerExtratoButtonAdd = styled.View`
  flex-direction: row;
  justify-content: space-between;
  shadow-color: #000;
  shadow-offset: {
    width: 0px;
    height: 2px;
  }
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
`;

export const TextExtrato = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 27px;
`;
export const ButtonAdd = styled.TouchableOpacity`
  position: absolute;
  height: 65px;
  width: 65px;
  border-radius: 32.25px;
  background-color: #413d4f;
  justify-content: center;
  align-self: flex-end;
  align-items: center;
  left: ${Dimensions.get('window').width / 1.3}px;
  right: 89px;
  bottom: 40px;
`;
