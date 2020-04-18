import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import * as S from './styles';

export default function DeliveryCard({ navigation }) {
  return (
    <S.Container>
      <S.DeliverHeader>
        <Icon name="local-shipping" size={30} color="#025bbf" />
        <S.DeliverText>Delivery 01</S.DeliverText>
      </S.DeliverHeader>

      <S.Progress>
        <S.Line />
        <S.Status>
          <S.Point />
          <S.StatusItem>Ready to pick up</S.StatusItem>
        </S.Status>

        <S.Status>
          <S.Point />
          <S.StatusItem>In transit</S.StatusItem>
        </S.Status>

        <S.Status>
          <S.Point />
          <S.StatusItem>Delivered</S.StatusItem>
        </S.Status>
      </S.Progress>

      <S.Infos>
        <S.InfoItem>
          <S.InfoTitle>Date</S.InfoTitle>

          <S.InfoText>14/01/2020</S.InfoText>
        </S.InfoItem>

        <S.InfoItem>
          <S.InfoTitle>City</S.InfoTitle>

          <S.InfoText>Diadema</S.InfoText>
        </S.InfoItem>

        <S.InfoItem>
          <S.ButtonFilter onPress={() => navigation.navigate('Profile')}>
            <S.ButtonText>See Details</S.ButtonText>
          </S.ButtonFilter>
        </S.InfoItem>
      </S.Infos>
    </S.Container>
  );
}
