import React from 'react';

import logo from '~/assets/images/logo.png';

import * as C from './styles';

const Main = () => (
  <C.Container>
    <C.Image source={logo} />
    <C.Input placeholder="Your ID" />
    <C.Button>
      <C.Text>Login</C.Text>
    </C.Button>
  </C.Container>
);

export default Main;
