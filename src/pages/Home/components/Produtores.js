import React, {useEffect, useState} from 'react';
import {FlatList, Text, StyleSheet} from 'react-native';
import {getProdutores} from '../../../service/GetData';

function Produtores() {
  const [titulo, setTitulo] = useState('');
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const response = getProdutores();
    setTitulo(response.titulo);
    setLista(response.lista);
  }, []);

  const Header = () => {
    return <Text style={styles.header}>{titulo}</Text>;
  };
  return (
    <FlatList
      data={lista}
      renderItem={({item: {nome}}) => <Text>{nome}</Text>}
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
