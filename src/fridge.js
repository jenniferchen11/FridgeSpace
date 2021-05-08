import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NativeRouter, Route, Link, Switch } from "react-router-native";
import NavBar from './user.js'
import CameraPage from './camerapage.js';

export default function FridgePage() {
  return (
    <View style={styles.container}>
      <Image style={styles.Logo} source={require('./Images/Logo.png')}></Image>
      <Image style={styles.Search} source={require('./Images/Search.png')}></Image>
      {/* <Image style={styles.Food} source={require('./Images/Food.png')}></Image> */}
      <Text style={styles.MyFridgeName}>My Fridge </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEEEEE',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.9
    // width:10000,
    // position: 'absolute',
    // bottom: 80,
    // height: 700

  },
  Logo: {
    position: 'absolute',
    width:130,
    height: 130,
    top: 250,
    alignItems: 'center',
  },
  Search: {
    position: 'absolute',
    width:314,
    height: 60,
    alignItems: 'center',
  },
  MyFridgeName: {
    position: 'absolute',
    textAlign: 'center',
    top: 180,
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'normal',
    // fontFamily: 'Lato',
    fontWeight: 'bold',
  },
  Food:{
    height: 200,
  },
  
  appname:{
    fontSize: 90,}
}); 

