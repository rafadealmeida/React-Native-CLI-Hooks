import React from 'react';
import {FlatList, Text, StyleSheet} from 'react-native';
import CardProdutor from './CardProdutor';
import useProdutores from '../../../hooks/useProdutores';

function Produtores({header: Topo}) {
  const [titulo, lista] = useProdutores();

  const Header = () => {
    return (
      <>
        <Topo />
        <Text style={styles.header}>{titulo}</Text>
      </>
    );
  };
  return (
    <FlatList
      data={lista}
      renderItem={({item}) => <CardProdutor {...item} />}
      keyExtractor={({nome}) => nome}
      ListHeaderComponent={Header}
    />
  );
}

export default Produtores;

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
  },
});
