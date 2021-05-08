import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';

export default function CameraPage() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  //for captured image
  const [previewVisible, setPreviewVisible] = useState(false)
  const [capturedImage, setCapturedImage] = useState('emptyuri')

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const snap = async () => {
    if (this.camera) {
      let photo = await this.camera.takePictureAsync();
      setPreviewVisible(true)
      setCapturedImage(String(photo.uri))
    }
  };

  const CameraPreview = ({photo}) => {
    if(previewVisible === false){
      return null;
    }
    console.log('Image captured', photo)
    return (
      <View>
        <Image
          source={{uri: capturedImage}}
          style={styles.capturedPic}
        />
      </View>
    )
  }

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}> 
      <CameraPreview photo={capturedImage} /> 
      <Camera style={styles.camera} type={type}
          ref={(r) => {
            camera = r
            }}
        >
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={styles.flip}> Flip </Text>
          </TouchableOpacity>
        </View>
      </Camera>
      <TouchableOpacity           
          style = {styles.captureImageButton}
          onPress={snap}> 
         <Text>Take Photo</Text>
        </TouchableOpacity>
    </View>
  )}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
    
    },
    captureImageButton:{
      width: 70,
      height: 70,
      bottom: 0,
      borderRadius: 50,
      backgroundColor: 'black'
    },
    camera:{
        width: 300,
        height: 300,
    },
    button:{
        backgroundColor: '#fff',
    },
    flip:{
      backgroundColor: 'red'
    },
    capturedPic:{
      width:300,
      height: 300
    }

  });