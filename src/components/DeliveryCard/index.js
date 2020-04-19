import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as S from './styles';

export default function DeliveryCard({ delivery }) {
  const navigation = useNavigation();

  return (
    <S.Container>
      <S.DeliveryHeader>
        <Icon name="local-shipping" size={30} color="#025bbf" />
        <S.DeliveryText>{`Delivery ${delivery.id
          .toString()
          .padStart(2, '0')}`}</S.DeliveryText>
      </S.DeliveryHeader>

      <S.Progress>
        <S.Line />
        <S.Status>
          <S.Point pointed={1} />
          <S.StatusItem>Ready to pick up</S.StatusItem>
        </S.Status>

        <S.Status>
          <S.Point pointed={delivery.start_date ? 1 : 0} />
          <S.StatusItem>In transit</S.StatusItem>
        </S.Status>

        <S.Status>
          <S.Point pointed={delivery.end_date ? 1 : 0} />
          <S.StatusItem>Delivered</S.StatusItem>
        </S.Status>
      </S.Progress>

      <S.Infos>
        <S.InfoItem>
          <S.InfoTitle>Date</S.InfoTitle>

          <S.InfoText>{delivery.created}</S.InfoText>
        </S.InfoItem>

        <S.InfoItem>
          <S.InfoTitle>City</S.InfoTitle>

          <S.InfoText>{delivery.recipient.city}</S.InfoText>
        </S.InfoItem>

        <S.InfoItem>
          <S.Button
            onPress={() => navigation.navigate('Delivery', { delivery })}>
            <S.ButtonText>See Details</S.ButtonText>
          </S.Button>
        </S.InfoItem>
      </S.Infos>
    </S.Container>
  );
}
