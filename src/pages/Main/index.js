import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import logo from '~/assets/images/logo.png';
import { signInRequest } from '~/store/modules/auth/actions';
import { useDispatch, useSelector } from 'react-redux';

import * as C from './styles';

const Main = () => {
  const [id, setId] = useState(0);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  const handleSubmit = () => dispatch(signInRequest(id));
  return (
    <C.Container>
      <C.Image source={logo} />
      <C.Input
        returnKeyType="send"
        placeholder="Your ID"
        onChangeText={setId}
        onSubmitEditing={handleSubmit}
      />
      <C.Button onPress={handleSubmit}>
        {loading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <C.Text>Login</C.Text>
        )}
      </C.Button>
    </C.Container>
  );
};
export default Main;
