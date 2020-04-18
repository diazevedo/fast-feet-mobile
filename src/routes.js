import React from 'react';
import { TouchableOpacity } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

import Main from '~/pages/Main';
import Dashboard from '~/pages/Dashboard';
import Delivery from '~/pages/Delivery';
import Profile from '~/pages/Profile';

function deliveryStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: false,
        headerLeftContainerStyle: {
          marginLeft: 20,
        },
      }}
      headerMode="screen"
      headerShown={false}>
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Delivery"
        component={Delivery}
        options={{
          headerTransparent: false,
          title: 'Delivery details',
          headerStyle: {
            height: 75, // Specify the height of your custom header
            backgroundColor: '#fff',
          },
          headerTintColor: '#fff',
          headerLeft: ({ onPress }) => (
            <TouchableOpacity onPress={() => onPress()}>
              <Icon name="chevron-left" size={30} color="#fff" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

const Routes = (isSigned = false) => {
  const LoginStack = () => {
    <Stack.Screen name="Login" component={Main} title="Login" />;
  };

  return !isSigned ? (
    <Stack.Navigator headerMode="none">
      <LoginStack />
    </Stack.Navigator>
  ) : (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
        style: {
          backgroundColor: '#025bbf',
        },
        keyboardHidesTabBar: true,
      }}>
      <Tabs.Screen
        name="Deliveries"
        component={deliveryStack}
        options={{
          tabBarLabel: 'Deliveries',
          title: 'no title',
          tabBarVisible: true,
          tabBarIcon: ({ color }) => (
            <Icon name="view-headline" size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          title: 'Profile',
          tabBarVisible: true,
          headerTintColor: '#9898',
          tabBarIcon: ({ color }) => (
            <Icon name="account-circle" size={30} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default Routes;
