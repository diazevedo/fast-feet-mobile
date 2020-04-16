import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import '~/config/ReactotronConfig';

import { Provider } from 'react-redux';
import store from './store';

import Routes from '~/routes';

const App = () => (
  <NavigationContainer>
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="#025BBF" />
      <Routes />
    </Provider>
  </NavigationContainer>
);

export default App;
