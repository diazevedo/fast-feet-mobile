import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import formatDate from '~/utils/functions/formatDate';
import * as S from './styles';

import api from '~/services/api';

export default function ProblemsList({ navigation, route }) {
  const { id } = route.params;

  const [problems, setProblems] = useState([]);

  useEffect(() => {
    const loadProblems = async () => {
      const response = await api.get(`parcels/problems/${id}`);
      console.tron.log(response.data);
      setProblems(response.data);
    };

    loadProblems();
  }, [id]);

  return (
    <S.Container>
      <S.ContainerStatusBar>
        <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      </S.ContainerStatusBar>
      <S.ProblemHeader>{`Delivery ${id}`}</S.ProblemHeader>
      {problems.length > 0 ? (
        <S.List
          data={problems}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <S.Card>
              <S.Description>{item.description}</S.Description>
              <S.Date>{formatDate(item.created_at)}</S.Date>
            </S.Card>
          )}
        />
      ) : (
        <S.NothingHere>
          <S.TextNothing>Any problem so far.</S.TextNothing>
        </S.NothingHere>
      )}
    </S.Container>
  );
}
