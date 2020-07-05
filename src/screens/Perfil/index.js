import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {loggout} from '../../actions/user';

import {Container, TextInfos, ButtonLogout, TextLogout} from './styles';

const Perfil = ({navigation}) => {
  const user = useSelector(props => props.user);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(user);
  }, []);

  function logout() {
    dispatch(loggout());
    navigation.navigate('Login');
  }

  return (
    <Container>
      <TextInfos>{user.nome}</TextInfos>
      <TextInfos>{user.email}</TextInfos>
      <ButtonLogout
        onPress={() =>
          Alert.alert('Sair', 'Tem certeza que desaja sair ?', [
            {
              text: 'Não',
            },
            {
              text: 'Sim',
              onPress: () => logout(),
            },
          ])
        }>
        <TextLogout>Sair</TextLogout>
      </ButtonLogout>
    </Container>
  );
};

export default Perfil;
