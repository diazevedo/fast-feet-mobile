import React, { useState, useRef } from 'react';
import { StatusBar, Alert, ActivityIndicator } from 'react-native';

import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import photoExample from '~/assets/images/signing.png';

import api from '~/services/api';

import * as S from './styles';

export default function Confirm({ navigation, route }) {
  const { id } = route.params;
  const cameraRef = useRef(null);
  const [image, setImage] = useState(null);
  const [imageId, setImageId] = useState(null);
  const [loading, setLoading] = useState(false);

  const user = useSelector((state) => state.user);

  const takePicture = async () => {
    if (cameraRef) {
      try {
        setLoading(true);
        const options = { quality: 0.5, base64: true };
        const data = await cameraRef.current.takePictureAsync(options);

        const file = new FormData();
        file.append('file', {
          type: 'image/jpg',
          uri: data.uri,
          name: 'signature.jpg',
        });

        const response = await api.post('files', file);
        setImageId(response.data.id);
        setImage(data.uri);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.tron.log(error);
      }
    }
  };

  const handleSubmit = async () => {
    try {
      if (!imageId) {
        return Alert.alert('Error', 'Plase upload a image');
      }

      await api.put(`couriers/${user.profile.id}/deliveries/${id}/finish`, {
        file_id: imageId,
      });

      Alert.alert('All good', 'Yes, great job!');
      navigation.navigate('Dashboard');
    } catch (error) {
      Alert.alert('Sorry', 'Something went wrong');
    }
  };

  return (
    <S.Container>
      <S.ContainerStatusBar>
        <StatusBar barStyle="light-content" backgroundColor="#fff" />
      </S.ContainerStatusBar>
      {image ? (
        <S.Card>
          <S.ImageBackground source={{ uri: image }} />
          <S.ButtonCapture onPress={() => setImage(null)}>
            <Icon name="close" color="#fff" size={30} />
          </S.ButtonCapture>
        </S.Card>
      ) : (
        <S.Card>
          <S.Camera ref={cameraRef} captureAudio={false} type="back" />
          <S.ImageBackground source={photoExample} />
          <S.ButtonCapture onPress={() => takePicture()}>
            <Icon name="photo-camera" color="#fff" size={30} />
          </S.ButtonCapture>
        </S.Card>
      )}

      <S.Button onPress={() => handleSubmit()}>
        {loading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <S.ButtonText>Submit</S.ButtonText>
        )}
      </S.Button>
    </S.Container>
  );
}
