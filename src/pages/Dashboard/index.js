import React, { useEffect, useState, useCallback } from 'react';
import { TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { signOut } from '~/store/modules/auth/actions';

import formatDate from '~/utils/functions/formatDate';
import formatUserInitials from '~/utils/functions/formatUserInitials';
import api from '~/services/api';

import DeliveryCard from '~/components/DeliveryCard';
import * as S from './styles';

export default function Dashboard() {
  const [deliveries, setDeliveries] = useState([]);
  const [deliveriesStatus, setDeliveriesStatus] = useState('all');
  const [refreshing, setRefreshing] = useState(false);
  const dispactch = useDispatch();

  const user = useSelector((state) => state.user.profile);

  const loadDeliveries = useCallback(async () => {
    try {
      const response = await api.get(`/couriers/${user.id}/deliveries`, {
        params: { status: deliveriesStatus },
      });

      const deliveriesFormatted = response.data.map((d) => ({
        ...d,
        created: formatDate(d.createdAt),
      }));

      setDeliveries(deliveriesFormatted);
      setRefreshing(false);
    } catch (error) {
      console.tron.log(error);
    }
  }, [deliveriesStatus, user.id]);

  useEffect(() => {
    loadDeliveries('all');
  }, [deliveriesStatus, loadDeliveries]);

  useFocusEffect(
    useCallback(() => {
      loadDeliveries();
    }, [loadDeliveries]),
  );

  const handleClickLogOut = () => {
    dispactch(signOut());
  };

  return (
    <S.SafeAreaView>
      <S.Container>
        <S.Header>
          <S.ViewRow>
            {user.avatar && user.avatar.url ? (
              <S.Image
                source={{
                  uri: user.avatar.url,
                }}
              />
            ) : (
              <S.ViewImage>
                <S.TextProfile>{formatUserInitials(user.name)}</S.TextProfile>
              </S.ViewImage>
            )}

            <S.ViewColumn>
              <S.WelcomeText>Welcome back, </S.WelcomeText>
              <S.NameText>{user.name}</S.NameText>
            </S.ViewColumn>
          </S.ViewRow>
          <TouchableOpacity onPress={() => handleClickLogOut()}>
            <Icon name="input" size={26} color="#E74040" />
          </TouchableOpacity>
        </S.Header>

        <S.HeaderList>
          <S.Button onPress={() => setDeliveriesStatus('all')}>
            <S.NameText>Deliveries</S.NameText>
          </S.Button>
          <S.ViewRow>
            <S.ButtonFilter
              onPress={() => setDeliveriesStatus('all')}
              selected={deliveriesStatus === 'all'}>
              <S.TextFilter selected={deliveriesStatus === 'all'}>
                All
              </S.TextFilter>
            </S.ButtonFilter>

            <S.ButtonFilter
              onPress={() => setDeliveriesStatus('pending')}
              selected={deliveriesStatus === 'pending'}>
              <S.TextFilter selected={deliveriesStatus === 'pending'}>
                Pending
              </S.TextFilter>
            </S.ButtonFilter>

            <S.ButtonFilter
              onPress={() => setDeliveriesStatus('delivered')}
              selected={deliveriesStatus === 'delivered'}>
              <S.TextFilter selected={deliveriesStatus === 'delivered'}>
                Delivered
              </S.TextFilter>
            </S.ButtonFilter>
          </S.ViewRow>
        </S.HeaderList>
        {deliveries.length > 0 ? (
          <S.List
            onRefresh={loadDeliveries}
            refreshing={refreshing}
            data={deliveries}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => <DeliveryCard delivery={item} />}
          />
        ) : (
          <S.NothingHere>
            <Icon name="sentiment-dissatisfied" size={100} color="#025bbf" />
            <S.NameText>Sorry, nothing here.</S.NameText>
          </S.NothingHere>
        )}
      </S.Container>
    </S.SafeAreaView>
  );
}
