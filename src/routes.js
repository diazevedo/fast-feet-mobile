import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Main from '~/pages/Main';

const Routes = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Login" component={Main} title="Login" />
    </Stack.Navigator>
  );
};

export default Routes;
