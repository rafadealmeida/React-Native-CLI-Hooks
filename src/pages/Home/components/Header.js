import React, {useEffect, useState} from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import logo from '../../../../src/assets/logo.png';
import {getTopo} from '../../../service/GetData';

function Header() {
  const [titulo, setTitulo] = useState('');
  const [legenda, setLegenda] = useState('');

  useEffect(() => {
    const response = getTopo();
    setTitulo(response.boasVindas);
    setLegenda(response.legenda);
  }, []);

  return (
    <View style={styles.header}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>{titulo}</Text>
      <Text style={styles.description}>{legenda}</Text>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#F6F6F6',
    padding: 16,
  },
  logo: {
    width: 70,
    height: 28,
  },
  title: {
    color: '#464646',
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
    marginTop: 24,
  },
  description: {
    color: '#A3A3A3',
    fontSize: 16,
    lineHeight: 26,
  },
});
