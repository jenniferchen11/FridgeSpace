import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function FridgePage() {
  return (
    <View style={styles.container}>
      <Image style={styles.Logo} source={require('./Images/Logo.png')}></Image>
      <Image style={styles.Search} source={require('./Images/Search.png')}></Image>
      <Image style={styles.Food} source={require('./Images/Food.png')}></Image>
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
    backgroundColor: '#EEEEEE',
    alignItems: 'center',
    justifyContent: 'center',
    width:10000,

  },
  Logo: {
    position: 'absolute',
    width:130,
    height: 130,
    alignItems: 'center',
    top: 77,
  },
  Search: {
    position: 'absolute',
    width:314,
    height: 60,
    alignItems: 'center',
    top: 240,
  },
  MyFridgeName: {
    position: 'absolute',
    textAlign: 'center',
    top: 180,
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontFamily: 'Lato',
    fontWeight: 'bold',
  },
  
  appname:{
    fontSize: 90,}
}); 

