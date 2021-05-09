import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import {SearchBar} from 'react-native-elements';


export default function CameraPage() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [date, setDate] = useState(new Date(1598051730000));
  //for captured image
  const [previewVisible, setPreviewVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [camera, setCamera] = useState(null);
  const [search, setSearch] = useState("");
  //text
  const[imageText, setImageText] = useState("INGREDIENTS");

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const snap = async () => {
    if (camera) {
      setPreviewVisible(false)
      photo = await camera.takePictureAsync({base64: true,});
      setCapturedImage(photo)
      stringPhoto(photo);
    }
    else{
      console.log("Issue occured with camera")
    }
  };

  const unmount = async () => {
    setPreviewVisible(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => setPreviewVisible(true), 200);
    return () => clearTimeout(timer);
  }, [imageText]);

  const stringPhoto = async(capturedData) => {
      let body = JSON.stringify({
        requests: [
            {
                image: {
                    content:capturedData.base64
                },
                features: [
                    { type: "TEXT_DETECTION"},
                ],
            }
        ]
      });

      let response = await fetch(
        'https://vision.googleapis.com/v1/images:annotate?key=AIzaSyCx9GT1CYw1rP3BMESxUlxWsihF7ZCXEyc',
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: body
        }
      );
      let responseJson = await response.json();
      //Prints out image text from JSON object
      console.log("GOOGLE CLOUD VISION API RESULTS:")
      console.log(responseJson.responses[0].textAnnotations[0].description);
      setImageText(responseJson.responses[0].textAnnotations[0].description);
  };

  const updateSearch = (search) => {
    setSearch(search);
  };

  const CameraPreview = () => {
    if(previewVisible === false || capturedImage ===null){
      return null;
    }
    return (
      <View style={styles.popup}>
        <SearchBar
          containerStyle={styles.bar}
          round
          searchIcon={{ size: 24 }}
          placeholder="Enter Name of Food"
          platform="default"
          lightTheme={true}
          inputStyle={styles.inputStyle}
          onChangeText={updateSearch}
          value={search}

        />
        <Image
          source={{uri: capturedImage.uri}}
          style={styles.capturedPic}
        /> 
        <View style={styles.icons}>
        <Image style={styles.icon1} source={require('./Images/vegan.png')}></Image>
        <Image style={styles.icon2} source={require('./Images/wheat.png')}></Image>
        <Image style={styles.icon3} source={require('./Images/leaf.png')}></Image>
        <Image style={styles.icon4} source={require('./Images/fish.png')}></Image>
        <Image style={styles.scale} source={require('./Images/rating.png')}></Image>
        <Text style={styles.t1}>Not {"\n"}Vegan</Text>
        <Text style={styles.t2}>Vegetarian!</Text>
        <Text style={styles.t3}>Not{"\n"}Pescatarian</Text>
        <Text style={styles.t4}>Not {"\n"}Gluten-Free</Text>
        <Text style={styles.expiry}>Enter Expiry Date:</Text>
        <RNDateTimePicker
          style={styles.datePicker}
          testID="dateTimePicker"
          value={date}
          mode={'date'}
          is24Hour={true}
          display="default"
         />
        <TouchableOpacity           
          style = {styles.addDateButton}
          onPress={unmount}> 
          <Text style = {styles.addToFridgeText}>Add to Fridge</Text>
      </TouchableOpacity>
        </View>
      </View>
    )
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  //let camera;
  return (
    <View style={styles.container}> 
      <Image style={styles.Logo} source={require('./Images/slogan.png')}></Image>
      <Text style={styles.beginYourScan} >Begin Your Scan</Text>
      <Camera style={styles.cameraa} type={type}
          ref={(r) => {
            setCamera(r)
            }}
        >
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.flipButton}
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
        <Image style={styles.takePhotoIcon} source={require('./Images/Spinner.png')}></Image>
      </TouchableOpacity>
      <CameraPreview />  
    </View>
  )}

const styles = StyleSheet.create({
    container: {
      flex: 0.9,
      backgroundColor: '#EEEEEE',
      alignItems: 'center',
      justifyContent: 'center',
    },
    beginYourScan: {
      top: -70,
      fontSize: 30,
      fontStyle: 'normal',
      fontFamily: 'Avenir',
      fontWeight: 'bold',
    },
    captureImageButton:{
      width: 70,
      textAlign:'center',
      height: 70,
      top: 240,
      borderRadius: 50,
      backgroundColor: 'green'
    },
    takePhotoIcon:{
      width: 50,
      height:50,
      top: 10,
      left:10
    },
    cameraa:{
      position: 'absolute',
      top: 330,
      left: 55,
      alignItems: 'center',
      width: 300,
      height: 300,
    },
    flipButton:{
      top: 10,
      left: 100,
      backgroundColor: 'green',
      borderWidth: 15,
      borderRadius: 30,
      borderColor: 'green'
    },
    flip:{
      backgroundColor: 'green',
      color: 'white',
      fontSize: 15,
      fontFamily: 'Avenir',
    },
    capturedPic:{
      width:270,
      height: 270,
      borderRadius: 30,
      left: 15
    },
    Logo: {
      position: 'absolute',
      width:200,
      height: 200,
      top: 50,
      alignItems: 'center',
    },
    popup:{
      flex: 1,
      top: -70,
      backgroundColor: '#EEEEEE',
      borderColor: '#EEEEEE',
      borderWidth: 30,
      borderRadius: 30,
    },
    results:{
      fontSize: 30,
      textAlign: 'center',
      fontFamily: 'Avenir',
      fontWeight: 'bold',
    },
    icon:{
      flexDirection: 'row'
    },
    icon1:{
      width: 50,
      height: 50,
      top: 10

    },
    icon2:{
      width: 50,
      height: 50,
      top: 30,
      left: 150
    },
    icon3:{
      width: 50,
      height: 50,
      top: -90,
      left: 150
    },
    icon4:{
      width: 50,
      height: 50,
      top: -70
    },
    scale:{
      width: 300,
      height: 55,
      top: -30
    },
    t1:{
      fontFamily: 'Avenir',
      top: -235,
      left: 57
    },
    t2:{
      fontFamily: 'Avenir',
      top: -270,
      color: 'green',
      left: 205
    },
    t3:{
      fontFamily: 'Avenir',
      top: -237,
      left: 55
    },
    t4:{
      fontFamily: 'Avenir',
      top: -280,
      left: 205
    },
    addToFridgeText:{
      fontFamily: 'Avenir',
      textAlign: 'center',
      top: 15,
      fontSize: 18
    },
    addDateButton:{
      backgroundColor: '#8bbf86',
      height: 60,
      borderRadius: 30,
      top:-140
    },
    datePicker:{
      top: -160,
      left: 70
    },
    expiry:{
      color: 'green',
      fontSize: 'Avenir',
      fontSize: 18,
      top: -180,
      textAlign: 'center'
    },
    bar:{
      height: 40,
      top: -30,
      backgroundColor: '#EEEEEE',
      borderWidth: 5,
      borderColor: '#EEEEEE',
      
    },
    inputStyle:{
      fontFamily: 'Avenir'
    }
  });