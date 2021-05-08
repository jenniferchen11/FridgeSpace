import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function FridgePage() {
  return (
    <View style={styles.container}>
      <Text style={styles.appname}>Hi </Text>
      <Text style={styles.appname}>Bye </Text>
      <TouchableOpacity>
          <Text>Button</Text>
      </TouchableOpacity>
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
  appname:{
    fontSize: 80,}
});
