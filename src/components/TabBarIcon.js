import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

export default function TabBarIcon(props) {
  return (
    <Icon
      name={props.name}
      size={24}
      style={{marginBottom: -2}}
      color={props.focused ? '#191825' : '#D6D6D6'}
    />
  );
}
