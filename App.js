import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CameraPage from './src/camerapage.js';
import FridgePage from './src/fridge.js';
import { NativeRouter, Route, Link, Switch } from "react-router-native";
import NavBar from './src/navbar.js'

export default function App() {
  return (
    <NativeRouter>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Link to="/" underlayColor="#f0f4f7" >
            <Text style={styles.home} >Home</Text>
        </Link>
        <Link to="/about" underlayColor="#f0f4f7" >
            <Text style={styles.fridge}>Fridge</Text>
        </Link>
        <Link to="/navbar" underlayColor="#f0f4f7" >
            <Text style={styles.navbar}>Navbar</Text>
        </Link>
      </View>

        {/* <Route exact path="/">
          <CameraPage/>
        </Route> */}
        <Route exact path='/'   render={(props) => (<CameraPage/>) } />
        <Route path="/about">
          <FridgePage/>
        </Route>
        <Route path="/navbar">
          <NavBar/>
        </Route>

    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  home:{
    position: 'absolute',
    left: 30,
    fontSize: 20,
  },
  fridge:{
    position: 'absolute',
    left: 120,
    fontSize: 20,
  },
  navbar:{
    position: 'absolute',
    left: 260,
    fontSize: 20,
  }
});
