import React, { useState } from 'react';
import { StatusBar, Alert } from 'react-native';

import api from '~/services/api';

import * as S from './styles';

export default function Problem({ navigation, route }) {
  const { id } = route.params;

  const [description, setDescription] = useState('');

  const handleSubmit = async () => {
    console.tron.log('kjbh');
    try {
      await api.post(`/parcels/${id}/problems`, {
        description,
      });

      Alert.alert('All good', 'The problem has been reported.');
      navigation.navigate('Dashboard');
    } catch (error) {
      Alert.alert('Sorry', 'Something went wrong');
    }
  };

  return (
    <S.Container>
      <S.ContainerStatusBar>
        <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      </S.ContainerStatusBar>

      <S.Card>
        <S.InputText
          maxLength={255}
          defaultValue=""
          onChangeText={setDescription}
          placeholder="Describe what happened..."
        />
      </S.Card>
      <S.Button onPress={() => handleSubmit()}>
        <S.ButtonText>Submit</S.ButtonText>
      </S.Button>
    </S.Container>
  );
}
