import React, { useEffect, useState, useCallback } from 'react';
import { TouchableOpacity } from 'react-native';
import { format, parseISO } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { signOut } from '~/store/modules/auth/actions';

import api from '~/services/api';

import DeliveryCard from '~/components/DeliveryCard';

import * as S from './styles';

export default function Dashboard({ navigation }) {
  const [deliveries, setDeliveries] = useState([]);
  const [deliveriesStatus, setDeliveriesStatus] = useState();
  const dispactch = useDispatch();

  const user = useSelector((state) => state.user);
  const formatDate = (date) => format(parseISO(date), 'dd/MM/yyyy');

  const loadDeliveries = useCallback(
    async (deliveryStatus) => {
      try {
        const response = await api.get(
          `/couriers/${user.profile.id}/deliveries`,
          { params: { status: deliveryStatus } },
        );

        const deliveriesFormatted = response.data.map((d) => ({
          ...d,
          created: formatDate(d.createdAt),
        }));

        setDeliveries(deliveriesFormatted);
      } catch (error) {
        console.tron.log(error);
      }
    },
    [user.profile.id],
  );

  useEffect(() => {
    loadDeliveries(deliveriesStatus);
  }, [deliveriesStatus, loadDeliveries]);

  const handleClickLogOut = () => {
    dispactch(signOut());
  };

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
          <TouchableOpacity onPress={() => handleClickLogOut()}>
            <Icon name="input" size={26} color="#E74040" />
          </TouchableOpacity>
        </S.Header>

        <S.HeaderList>
          <S.Button onPress={() => setDeliveriesStatus('')}>
            <S.NameText>Deliveries</S.NameText>
          </S.Button>
          <S.ViewRow>
            <S.ButtonFilter onPress={() => setDeliveriesStatus('pending')}>
              <S.TextFilter>Pending</S.TextFilter>
            </S.ButtonFilter>

            <S.ButtonFilter onPress={() => setDeliveriesStatus('delivered')}>
              <S.TextFilter>Delivered</S.TextFilter>
            </S.ButtonFilter>
          </S.ViewRow>
        </S.HeaderList>

        <S.List
          data={deliveries}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <DeliveryCard delivery={item} />}
        />
      </S.Container>
    </S.SafeAreaView>
  );
}
