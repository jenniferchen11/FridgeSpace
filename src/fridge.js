import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function FridgePage() {
  return (
    <View style={styles.container}>
      <Image style={styles.Logo} source={require('./Images/Logo.png')}></Image>
      <Text style={styles.appname}>Hi </Text>
      <Text style={styles.appname}>Bye </Text>
      <TouchableOpacity>
          <Text>Button</Text>
      </TouchableOpacity>
      <Text style={styles.MyFridgeName}>My Fridge </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Logo: {
    position: 'absolute',
    width:130,
    height: 130,
    alignItems: 'center',
    top: 77,
  },
  MyFridgeName: {
    position: 'absolute',
    textAlign: 'center',
    top: 180,
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontFamily: 'Lato',



  },
  appname:{
    fontSize: 90,}
}); 

