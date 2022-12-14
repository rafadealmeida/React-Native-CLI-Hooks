import React, {useMemo, useReducer} from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Estrelas from '../../../components/estrelas';

const distanciaEmMetros = distancia => {
  return `${distancia}m`;
};

function CardProdutor({nome, imagem, distancia, estrelas}) {
  const [selecionado, inverteSelecionado] = useReducer(
    selecionado => !selecionado,
    false,
  );

  const distanciaTexto = useMemo(
    () => distanciaEmMetros(distancia),
    [distancia],
  );
  return (
    <TouchableOpacity style={styles.card} onPress={inverteSelecionado}>
      <Image source={imagem} accessibilityLabel={nome} style={styles.imagem} />
      <View style={styles.info}>
        <View>
          <Text style={styles.nome}>{nome}</Text>
          <Estrelas
            quantidade={estrelas}
            editavel={selecionado}
            grande={selecionado}
          />
        </View>
        <Text style={styles.distancia}>{distanciaTexto}</Text>
      </View>
    </TouchableOpacity>
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
