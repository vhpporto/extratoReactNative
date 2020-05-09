import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
// import { Container } from './styles';

const Home = () => {
  const userInfo = useSelector(state => state.user);

  useEffect(() => {
    console.log(userInfo);
  });
  return <View />;
};

export default Home;
