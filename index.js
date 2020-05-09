import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Routes from './src/routes';
import store from './src/store';

const storeConfig = store();

const RNRedux = () => {
  return (
    <Provider store={storeConfig}>
      <Routes />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => RNRedux);
