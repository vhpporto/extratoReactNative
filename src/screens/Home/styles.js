import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
export const Container = styled.View`
  flex: 1;
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
  /* position: absolute; */
  height: 65px;
  width: 65px;
  position: absolute;
  border-radius: 32.25px;
  background-color: #413d4f;
  justify-content: center;
  align-self: flex-end;
  align-items: center;
  right: 100px;
  left: ${Dimensions.get('window').width / 1.3}px;
  bottom: 20px;
`;

export const ButtonMenu = styled.TouchableOpacity`
  /* position: absolute; */
  height: 65px;
  width: 65px;
  border-radius: 32.25px;
  background-color: #413d4f;
  justify-content: center;
  align-self: flex-end;
  align-items: center;
  left: ${Dimensions.get('window').width / 1.3}px;
  right: 0px;
  top: 50px;
  bottom: 0px;
`;

export const TextSaldo = styled.Text`
  color: #a7a7a7;
  margin-top: 20px;
  font-weight: bold;
`;

export const TextSaldoValor = styled.Text`
  color: #f5f5f5;
  font-weight: 300;
  font-size: 33px;
`;

export const TextDate = styled(TextSaldo)`
  color: #fff;
  font-weight: 500;
`;

export const ContainerButtons = styled.View`
  background-color: #191825;
  flex-direction: row;
  align-items: center;
`;

export const ButtonFilter = styled.View`
  flex: 1;
  align-items: center;
  ${props =>
    props.press && {
      borderBottomWidth: 4,
      borderBottomColor: '#50Aeee',
    }}
`;

export const TextMes = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  margin-bottom: 6px;
  margin-top: 10px;
`;

export const ContainerMes = styled.View`
  width: 95%;
  align-self: center;
  padding-left: 10px;
  padding: 10px;
  align-items: center;
  margin-bottom: 10px;
  flex-direction: row;
  border-bottom-width: 0.5px;
  border-bottom-color: #ddd;
`;

export const ContainerIcon = styled.View`
  flex: 2;

  background-color: blue;
`;

export const IconContainer = styled.View`
  flex: 1;
  width: 100%;
  /* background-color: yellow; */
`;

export const DescContainer = styled.View`
  flex: 6;
  /* width: 100%; */
  flex-direction: column;
  justify-content: center;
`;

export const Description = styled.Text`
  color: #444;
  font-weight: 500;
  font-size: 17px;
  margin-bottom: 5px;
`;

export const Date = styled.Text`
  color: #999;
  font-weight: 500;
`;

export const ValueContainer = styled.View`
  flex: 3;
  align-items: flex-end;
  padding-right: 5px;
`;

export const Value = styled.Text`
  color: #333;
  font-weight: 500;
`;

export const TitleModal = styled.Text`
  color: #444;
  font-size: 26px;
  font-weight: 500;
  align-self: center;
`;

export const DescModal = styled.Text`
  color: #666;
  font-size: 20px;
  font-weight: 500;
  margin-top: 50px;
  align-self: center;
`;

export const ValueModal = styled.Text`
  font-size: 28px;
  font-weight: 500;
  margin-top: 50px;
  align-self: center;
  color: ${props => {
    const number = props.children[1];
    if (number > 0) {
      return 'green';
    } else if (number < 0) {
      return 'red';
    } else {
      return 'black';
    }
  }};
`;

export const EmptyList = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const TextEmpty = styled.Text`
  margin-top: 30px;
  font-size: 24px;
  padding: 20px;
  color: #666;
`;

export const InputDate = styled.TouchableHighlight`
  height: 50px;
  width: 90%;
  border-width: 0.5px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;

export const TextDatePeriodo = styled.Text`
  color: #666;
  font-size: 17px;
`;

export const ButtonFilterPeriodo = styled.TouchableOpacity`
  height: 40px;
  width: 70%;
  align-self: center;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  background-color: #389eff;
`;

export const TextButtonFilter = styled.Text`
  color: #fff;
  font-weight: 700;
`;
