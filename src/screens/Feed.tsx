import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Feed() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Feed</Text>
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
