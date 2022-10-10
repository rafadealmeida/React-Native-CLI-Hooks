import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

function CardProdutor({nome, imagem, distancia, estrelas}) {
  return (
    <View style={styles.card}>
      <Image source={imagem} accessibilityLabel={nome} style={styles.imagem} />
      <View style={styles.info}>
        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.distancia}>{distancia}</Text>
      </View>
    </View>
  );
}

export default CardProdutor;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F6F6F6',
    marginHorizontal: 16,
    marginVertical: 6,
    borderRadius: 6,
    flexDirection: 'row',
    // android
    elevation: 4,

    //ios
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  imagem: {
    width: 48,
    height: 48,
    borderRadius: 6,
    marginVertical: 16,
    marginLeft: 16,
  },
  info: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 8,
    marginVertical: 16,
    marginRight: 16,
  },
  nome: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 'bold',
  },
  distancia: {
    fontSize: 12,
    lineHeight: 19,
  },
});
