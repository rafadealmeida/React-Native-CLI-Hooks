import React, {useEffect, useState} from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';

import estrela from '../assets/estrela.png';
import estrelaCinza from '../assets/estrelaCinza.png';

function Estrelas({
  quantidade: quantidadeAntiga,
  editavel = false,
  grande = false,
}) {
  const [quantidade, setQuantidade] = useState(quantidadeAntiga);
  const styles = stylesFunc(grande);

  const getImage = index => {
    if (index < quantidade) {
      return estrela;
    }
    return estrelaCinza;
  };

  const RenderEstrelas = () => {
    const listasEstrelas = [];

    for (let i = 0; i < 5; i++) {
      listasEstrelas.push(
        <TouchableOpacity key={i} onPress={() => {}} disable={!editavel}>
          <Image source={getImage(i)} style={styles.estrela} />
        </TouchableOpacity>,
      );
    }
    return listasEstrelas;
  };

  return (
    <View style={styles.starts}>
      <RenderEstrelas />
    </View>
  );
}

export default Estrelas;

const stylesFunc = grande =>
  StyleSheet.create({
    estrela: {
      width: grande ? 36 : 12,
      height: grande ? 36 : 12,
      marginRight: 2,
    },
    starts: {
      flexDirection: 'row',
    },
  });
