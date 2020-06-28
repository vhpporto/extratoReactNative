import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View} from 'react-native';

// import { Container } from './styles';

const Perfil = () => {
  const user = useSelector(props => props);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(user);
  }, []);

  return <View />;
};

export default Perfil;
