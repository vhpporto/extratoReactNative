import React from 'react';
import {
  Container,
  InputName,
  InputPassword,
  ButtonRegister,
  TextButton,
} from './styles';

const Cadastro = ({navigation}) => {
  return (
    <Container>
      <InputName placeholder="Nome" />
      <InputPassword placeholder="Senha" />
      <ButtonRegister>
        <TextButton>Registrar</TextButton>
      </ButtonRegister>
    </Container>
  );
};

export default Cadastro;
