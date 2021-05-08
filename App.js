import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import CameraPage from './src/camerapage.js';
import FridgePage from './src/fridge.js';
import { NativeRouter, Route, Link, Switch } from "react-router-native";
import User from './src/user.js'
import Saved from './src/saved.js'

export default function App() {
  return (
    // <FridgePage/>
    <NativeRouter>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Link to="/" underlayColor="#f0f4f7" >
          <Image style={styles.home} source={require('./src/Images/house.png')}></Image>
        </Link>
        <Link to="/fridge" underlayColor="#f0f4f7" >
          <Image style={styles.fridge} source={require('./src/Images/fridge.png')}></Image>
        </Link>
        <Link to="/saved" underlayColor="#f0f4f7" >
          <Image style={styles.saved} source={require('./src/Images/heart.png')}></Image>
        </Link>
        <Link to="/user" underlayColor="#f0f4f7" >
          <Image style={styles.user} source={require('./src/Images/user.png')}></Image>
        </Link>
      </View>

        <Route exact path='/'   render={(props) => (<CameraPage/>) } />
        <Route path="/fridge"><FridgePage/></Route>
        <Route path="/saved"><Saved/></Route>
        <Route path="/user"><User/></Route>

    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    position: 'relative',
    top: 830,
    alignItems: 'center',
    justifyContent: 'center',
  },
  home:{
    position: 'absolute',
    left: -170,
    width: 50,
    height: 50,
    flex: 1
  },
  fridge:{
    position: 'absolute',
    left: -80,
    width: 50,
    height: 50,
    flex: 1
  },
  saved:{
    position: 'absolute',
    left: 10,
    width: 50,
    height: 50,
    flex: 1
  },
  user:{
    position: 'absolute',
    left: 100,
    width: 50,
    height: 50,
    flex: 1
  }
});
