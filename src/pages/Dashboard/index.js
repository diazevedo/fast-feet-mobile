import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import DeliveryCard from '~/components/DeliveryCard';

import * as S from './styles';

export default function Dashboard({ navigation }) {
  // console.tron.log(navigation);
  return (
    <S.SafeAreaView>
      <S.Container>
        <S.Header>
          <S.ViewRow>
            <S.Image
              source={{
                uri: 'https://randomuser.me/api/portraits/thumb/men/75.jpg',
              }}
            />
            <S.ViewColumn>
              <S.WelcomeText>Welcome back, </S.WelcomeText>
              <S.NameText>Gaspar Antunes</S.NameText>
            </S.ViewColumn>
          </S.ViewRow>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Icon name="input" size={26} color="#E74040" />
          </TouchableOpacity>
        </S.Header>

        <S.HeaderList>
          <S.NameText>Deliveries</S.NameText>

          <S.ViewRow>
            <S.ButtonFilter onPress={() => navigation.navigate('Profile')}>
              <S.TextFilter>Pending</S.TextFilter>
            </S.ButtonFilter>

            <S.ButtonFilter onPress={() => navigation.navigate('Profile')}>
              <S.TextFilter>Delivered</S.TextFilter>
            </S.ButtonFilter>
          </S.ViewRow>
        </S.HeaderList>

        <S.List
          data={[
            {
              id: 1,
              date: '14/01/2020',
              city: 'Porto Alegre',
            },
          ]}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <DeliveryCard />}
        />
      </S.Container>
    </S.SafeAreaView>
  );
}
