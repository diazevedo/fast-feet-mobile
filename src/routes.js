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
import Problem from '~/pages/Problem';
import ProblemsList from '~/pages/ProblemsList';
import Confirm from '~/pages/Confirm';

function deliveryStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerLeftContainerStyle: {
          marginLeft: 10,
        },
        headerStyle: {
          height: 85,
          backgroundColor: '#025bbf',
        },
        headerTintColor: '#fff',
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
          title: 'Delivery details',
          headerStyle: {},
          headerLeft: ({ onPress }) => (
            <TouchableOpacity onPress={() => onPress()}>
              <Icon name="chevron-left" size={30} color="#FFF" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Problem"
        component={Problem}
        options={{
          title: 'Report a problem',
          headerLeft: ({ onPress }) => (
            <TouchableOpacity onPress={() => onPress()}>
              <Icon name="chevron-left" size={30} color="#FFF" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="ProblemsList"
        component={ProblemsList}
        options={{
          title: 'See problems',
          headerLeft: ({ onPress }) => (
            <TouchableOpacity onPress={() => onPress()}>
              <Icon name="chevron-left" size={30} color="#FFF" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Confirm"
        component={Confirm}
        options={{
          headerTransparent: true,
          title: 'Confirm delivery',
          // headerStyle: {
          //   height: 85, // Specify the height of your custom header
          //   backgroundColor: '#025bbf',
          // },
          // headerTintColor: '#FFF',
          // headerShown: true,
          headerLeft: ({ onPress }) => (
            <TouchableOpacity onPress={() => onPress()}>
              <Icon name="chevron-left" size={30} color="#FFF" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default function Routes(isSigned = false) {
  return !isSigned ? (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Login" component={Main} title="Login" />
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
}
