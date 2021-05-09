import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function FridgePage() {
  return (
    <View style={styles.container}>
      <Image style={styles.Food} source={require('./Images/food.png')}></Image>
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
  },
  Food:{
    width: 400,
    height: 740,
  },
  
}); 

