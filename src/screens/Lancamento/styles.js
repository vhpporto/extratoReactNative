import React from 'react';
import styled from 'styled-components/native';
import {TextInputMask} from 'react-native-masked-text';
import RNPickerSelect from 'react-native-picker-select';

export const KeyboardView = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
`;

export const Container = styled.View`
  flex: 1;
  width: 100%;
`;

export const BackButton = styled.TouchableOpacity`
  align-self: flex-start;
  margin-top: 50px;
  padding-left: 20px;
`;

export const Title = styled.Text`
  align-self: center;
  font-size: 18px;
  font-weight: 600;
  color: #333;
`;

export const InputDescription = styled.TextInput`
  align-self: center;
  margin-top: 20px;
  height: 40px;
  width: 90%;
  border-bottom-color: #ddd;
  border-bottom-width: 0.5px;
  font-size: 16px;
`;

export const CheckBoxContainer = styled.View`
  flex-direction: row;
  margin-top: 20px;
  align-self: center;
  margin-bottom: 20px;
`;

export const FormContainer = styled.View`
  flex: 1;
  margin-top: 15px;
`;

export const InputValue = styled(TextInputMask)`
  align-self: center;
  margin-top: 20px;
  height: 40px;
  width: 90%;
  border-bottom-color: #ddd;
  border-bottom-width: 0.5px;
  font-size: 16px;
`;

export const ButtonCalendar = styled.TouchableOpacity`
  align-self: center;
  margin-top: 20px;
  height: 40px;
  width: 90%;
`;

export const ContainerCalendar = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const TextDate = styled.Text`
  font-size: 18px;
  color: #9999;
`;
export const TextDateSelected = styled.Text`
  font-size: 18px;
  color: #444;
`;

export const ButtonSave = styled.TouchableOpacity`
  margin-top: 50px;
  align-self: center;
  background-color: #413d4f;
  height: 45px;
  width: 80%;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;

export const TextButtonSave = styled.Text`
  color: #fff;
  font-weight: 700;
  font-size: 18px;
`;

export const PickSelector = styled(RNPickerSelect)`
  font-size: 16px;
  padding-top: 13px;
  padding-bottom: 12px;
  border-bottom-width: 0.5px;
  width: 90%;
  align-self: center;
  border-color: #ddd;
  border-radius: 4px;
  background-color: transparent;
  color: #000;
  border-top-width: 0;
`;
