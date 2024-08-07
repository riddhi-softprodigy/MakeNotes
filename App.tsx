import React, { useState } from 'react';
import { View, Button, Image, StyleSheet, Text, AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './app/Redux';
import Navigation from './app//Navigation/navigator';
import Firebase from '@react-native-firebase/app';


const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  camera: { flex: 1 },
  preview: { flex: 1, width: '100%' },
  predictions: { position: 'absolute', bottom: 0, left: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: 10 },
  predictionText: { color: 'white' },
});

export default App;
