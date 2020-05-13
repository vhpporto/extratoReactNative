import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
Icon.loadFont();

const IconCategory = props => {
  return <Icon name={props.name} size={25} color={'#52ABFF'} />;
};

export default IconCategory;
