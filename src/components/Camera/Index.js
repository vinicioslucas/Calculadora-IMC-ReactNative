import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Button, SafeAreaView, StyleSheet, Modal, Image } from 'react-native';
import { Camera } from 'expo-camera';
import {FontAwesome} from "@expo/vector-icons"

export default function CameraComponent() {
  const camRef = useRef(null)
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [hasPermission, setHasPermission] = useState(null);
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>Acesso negado</Text>;
  }

  async function takePicture(){
    if(camRef){
        const data = await camRef.current.takePictureAsync();
        setCapturedPhoto(data.uri)
        setOpen(true)
    }
    
  }
  const toggleCameraType = () => {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Camera style={styles.camera} type={type} ref={camRef} >
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Text style={styles.text}>Flip</Text>
            <FontAwesome
                name='exchange' size={23} color="#549CF0">
            </FontAwesome>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonCamera}
            onPress={takePicture}
          >
            <FontAwesome name='camera' size={23} color="#549CF0">
            </FontAwesome>
          </TouchableOpacity>
        </View>
      </Camera>
      {capturedPhoto && (
      <Modal
      animationType='slide'
      transparent={true}
      visible={open}
      >
        <View style={styles.contentModal}>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => { setOpen(false) }}
        >
          <FontAwesome name='close' size={50} color="#549CF0"></FontAwesome>
        </TouchableOpacity>
          <Image style={styles.imgPhoto} source={{ uri: capturedPhoto}}>
          </Image>
        </View>
      </Modal>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center"
    },
    camera: {
      flex: 1,
      height: "100%",
      width: "100%"
    },
    buttonContainer: {
      flex: 1,
      backgroundColor: 'transparent',
      flexDirection: 'row',
    },
    button: {
      position: "absolute",
      bottom: 50,
      left:30,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
      margin: 20,
      height: 50,
      width: 50,
      borderRadius: 50
    },
    text: {
      fontSize: 18,
      color: 'white',
    },
    buttonCamera:{
      position: "absolute",
      bottom: 50,
      right:30,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
      margin: 20,
      height: 50,
      width: 50,
      borderRadius: 50
    },
    contentModal:{
      flex: 1,
      justifyContent: "center",
      alignItems: "flex-end",
      margin: 20,
    },
    closeButton:{
      position: "absolute",
      top:20,
      left: 2,
      margin: 10,
    },
    imgPhoto:{
      width: "100%",
      height: 400,
    }
  });
