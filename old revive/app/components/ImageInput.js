import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as ImagePicker from 'react-native-image-picker';
// import * as ImagePicker from "expo-image-picker";

import colors from '../config/colors';

function ImageInput({imageUri, onChangeImage}) {
  // useEffect(() => {
  //   requestPermission();
  // }, []);

  // const requestPermission = async () => {
  //   const { granted } = await ImagePicker.requestCameraPermissionsAsync();
  //   if (!granted) alert("You need to enable permission to access photos.");
  // };

  const handlePress = () => {
    if (!imageUri) selectImage();
    else
      Alert.alert('Delete', 'Are you sure you want to delete the image?', [
        {
          text: 'Yes',
          onPress: () => onChangeImage(null),
        },
        {text: 'No'},
      ]);
  };
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibrary({
        mediaType: 'photo',
        quality: 0.5,
      });
      if (!result.didCancel) onChangeImage(result.assets[0].uri);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons
            name="camera"
            size={40}
            color={colors.medium}
          />
        )}
        {imageUri && <Image source={{uri: imageUri}} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.light,
    borderRadius: 15,
    height: 100,
    justifyContent: 'center',
    width: 100,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default ImageInput;
