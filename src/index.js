import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';

import '~/config/ReactotronConfig';

import { store, persistor } from './store';
import App from './App';

const Index = () => (
  <NavigationContainer>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="dark-content" backgroundColor="#025BBF" />
        <App />
      </PersistGate>
    </Provider>
  </NavigationContainer>
);

export default Index;
