import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView } from 'react-native';

import Header from './src/components/header/Header';
import Today from './src/pages/weather/Today';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
        <StatusBar translucent backgroundColor="transparent" />
        <Header/>
        <Today/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  }
});
