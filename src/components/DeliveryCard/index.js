import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import * as S from './styles';

export default function DeliveryCard({ delivery }) {
  console.tron.log(delivery);
  return (
    <S.Container>
      <S.DeliverHeader>
        <Icon name="local-shipping" size={30} color="#025bbf" />
        <S.DeliverText>{`Delivery ${delivery.id
          .toString()
          .padStart(2, '0')}`}</S.DeliverText>
      </S.DeliverHeader>

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
          <S.ButtonFilter onPress={() => console.tron.log(delivery)}>
            <S.ButtonText>See Details</S.ButtonText>
          </S.ButtonFilter>
        </S.InfoItem>
      </S.Infos>
    </S.Container>
  );
}
