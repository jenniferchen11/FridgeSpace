import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavBar from './src/navbar.js'
import CameraPage from './src/camerapage.js';
import FridgePage from './src/fridge.js';
import { NativeRouter, Route, Link, Switch } from "react-router-native";

export default function App() {
  return (
    <NativeRouter>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Link to="/" underlayColor="#f0f4f7" >
            <Text>Home</Text>
        </Link>
        <Link to="/about" underlayColor="#f0f4f7" >
            <Text>About</Text>
        </Link>
      </View>
      <Switch>
        <Route exact path="/">
          <CameraPage/>
        </Route>
        <Route path="/about">
          <FridgePage/>
        </Route>
      </Switch> 
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appname:{
    fontSize: 80,}
});
