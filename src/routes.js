import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Login from './screens/Login';
import Home from './screens/Home';
import Cadastro from './screens/Cadastro';
import Lancamento from './screens/Lancamento';
import Senha from './screens/Senha';

Icon.loadFont();

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: '#FFF',
        // style: {marginBottom: -30},
      }}>
      <Tab.Screen
        name={'Extrato'}
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={MyTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen
          name="Lancamento"
          component={Lancamento}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Senha" component={Senha} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
