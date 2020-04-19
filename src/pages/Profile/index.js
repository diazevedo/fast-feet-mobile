import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import formatDate from '~/utils/functions/formatDate';
import formatUserInitials from '~/utils/functions/formatUserInitials';
import { signOut } from '~/store/modules/auth/actions';

import * as S from './styles';

export default function Profile() {
  const user = useSelector((state) => state.user.profile);
  const dispactch = useDispatch();

  const handleClickLogOut = () => {
    dispactch(signOut());
  };
  return (
    <S.Wrapper>
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
        <S.Label>Full name</S.Label>
        <S.UserInfo>{user.name}</S.UserInfo>
      </S.ViewColumn>

      <S.ViewColumn>
        <S.Label>Email</S.Label>
        <S.UserInfo>{user.email}</S.UserInfo>
      </S.ViewColumn>

      <S.ViewColumn>
        <S.Label>Member since</S.Label>
        <S.UserInfo>{formatDate(user.createdAt)}</S.UserInfo>
      </S.ViewColumn>

      <S.ButtonLogout onPress={() => handleClickLogOut()}>
        <S.ButtonText>Logout</S.ButtonText>
      </S.ButtonLogout>
    </S.Wrapper>
  );
}
