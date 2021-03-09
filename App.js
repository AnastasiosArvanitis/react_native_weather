import 'react-native-gesture-handler';
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Header from './src/components/header/Header';
import Today from './src/pages/weather/Today';
import Geo from "./src/pages/geo/Geo";
import Home from "./src/pages/home/Home";

export default function App() {

  const Stack = createStackNavigator();

  return (

      <NavigationContainer>
          <Header/>
          <Stack.Navigator>
              <Stack.Screen
                  name="Home"
                  component={Home}
                  options={{ title: 'How do you want to use this app?' }}
              />
              <Stack.Screen
                  name="Today"
                  component={Today}
                  options={{ title: 'Back to home' }}
              />
              <Stack.Screen
                  name="Geo"
                  component={Geo}
                  options={{ title: 'Back to home' }}
              />
          </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  }
});
