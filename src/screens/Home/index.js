import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
// import { Container } from './styles';

const Home = () => {
  return <View />;
};

const mapStateToProps = state => {
  console.log(state);
  return {state};
};
export default connect(
  mapStateToProps,
  null,
)(Home);
