import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import logo from '../../../../src/assets/logo.png';

function Header() {
  return (
    <View style={styles.header}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>Olá, Sara!</Text>
      <Text style={styles.description}>Encontre os melhores produtores!</Text>
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
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
    marginTop: 24,
  },
  description: {
    fontSize: 16,
    lineHeight: 26,
  },
});
