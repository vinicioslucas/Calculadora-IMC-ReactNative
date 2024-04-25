import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import Routes from './src/routes/Index';

export default function App() {
  return (
    <Routes>

    </Routes>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
    paddingTop: 80,
  },
});
