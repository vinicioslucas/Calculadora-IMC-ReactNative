import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Form from '../components/Form/Index';
import Title from '../components/Title/Index';

export default function CalculadoraIMC() {
  return (
    <View style={styles.container}>
    <Title/>
    <Form/>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
    paddingTop: 80,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
