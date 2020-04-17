import 'react-native-gesture-handler';

import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import '~/config/ReactotronConfig';

import { Provider } from 'react-redux';
import { store, persistor } from './store';

import Routes from '~/routes';

const App = () => (
  <NavigationContainer>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="light-content" backgroundColor="#025BBF" />
        <Routes />
      </PersistGate>
    </Provider>
  </NavigationContainer>
);

export default App;
