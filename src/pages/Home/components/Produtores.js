import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {getProdutores} from '../../../service/GetData';

function Produtores() {
  useEffect(() => {
    const response = getProdutores();
    console.log(response);
  }, []);

  return <Text>Produtores</Text>;
}

export default Produtores;
