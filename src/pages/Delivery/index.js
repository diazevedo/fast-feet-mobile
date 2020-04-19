import React from 'react';
import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as S from './styles';

import formatStatus from '~/utils/functions/formatStatus';
import formatDate from '~/utils/functions/formatDate';
import formatAddress from '~/utils/functions/formatAddress';

export default function Delivery({ navigation, route }) {
  const { delivery } = route.params;

  return (
    <S.Container>
      <S.ContainerStatusBar>
        <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      </S.ContainerStatusBar>

      <S.Card>
        <S.DeliveryHeader>
          <Icon name="local-shipping" size={30} color="#025bbf" />
          <S.DeliveryText>Delivery Details</S.DeliveryText>
        </S.DeliveryHeader>
        <S.InfoTitle>Recipient</S.InfoTitle>
        <S.InfoText>{delivery.recipient.name}</S.InfoText>
        <S.InfoTitle>ENDEREÇO DE ENTREGA</S.InfoTitle>
        <S.InfoText>{formatAddress(delivery.recipient)}</S.InfoText>
        <S.InfoTitle>PRODUTO</S.InfoTitle>
        <S.InfoText isLast>{delivery.product}</S.InfoText>
      </S.Card>
      <S.StatusCard>
        <S.DeliveryHeader>
          <Icon name="event" size={30} color="#025bbf" />
          <S.DeliveryText>Delivery Status</S.DeliveryText>
        </S.DeliveryHeader>
        <S.InfoTitle>Status</S.InfoTitle>
        <S.InfoText>{formatStatus(delivery)}</S.InfoText>
        <S.ViewRow>
          <S.ViewColumn>
            <S.InfoTitle>Data de retirada</S.InfoTitle>
            <S.InfoText isLast>{formatDate(delivery.start_date)}</S.InfoText>
          </S.ViewColumn>
          <S.ViewColumn>
            <S.InfoTitle>Data de entrega</S.InfoTitle>
            <S.InfoText isLast>{formatDate(delivery.end_date)}</S.InfoText>
          </S.ViewColumn>
        </S.ViewRow>
      </S.StatusCard>
      <S.Action>
        <S.ButtonWrapper isFirstColum={1}>
          <S.ButtonAction>
            <Icon name="close" size={30} color="#E74040" />
            <S.ButtonText>Informar problema</S.ButtonText>
          </S.ButtonAction>
        </S.ButtonWrapper>
        <S.ButtonWrapper>
          <S.ButtonAction>
            <Icon name="error-outline" size={30} color="#E7BA40" />
            <S.ButtonText>Visualizar problema</S.ButtonText>
          </S.ButtonAction>
        </S.ButtonWrapper>
        <S.ButtonWrapper isLast={1} isFirstColum={1}>
          <S.ButtonAction>
            <Icon name="airport-shuttle" size={30} color="#025bbf" />
            <S.ButtonText>Pick up delivery</S.ButtonText>
          </S.ButtonAction>
        </S.ButtonWrapper>
        <S.ButtonWrapper isLast={1}>
          <S.ButtonAction>
            <Icon name="done" size={30} color="#33A36B" />
            <S.ButtonText>Finalizar entrega</S.ButtonText>
          </S.ButtonAction>
        </S.ButtonWrapper>
      </S.Action>
    </S.Container>
  );
}
