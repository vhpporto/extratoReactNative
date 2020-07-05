import React from 'react';
import {Dimensions} from 'react-native';
import {Modalize} from 'react-native-modalize';

import {DescModal} from './styles';

const ModalizePeriodo = () => {
  const modalizeRefPeriodo = useRef(null);

  const onOpen = item => {
    modalizeRef.current?.open();
  };

  return (
    <Modalize
      snapPoint={Dimensions.get('window').height / 1.6}
      childrenStyle={{
        width: '90%',
        marginTop: 30,
        alignSelf: 'center',
        padding: 20,
        // alignItems: 'center',
      }}
      ref={modalizeRefPeriodo}>
      <DescModal>Teste</DescModal>
    </Modalize>
  );
};

export default ModalizePeriodo;
