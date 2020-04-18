import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';

// import { Container } from './styles';

export default function Delivery({ navigation }) {
  console.tron.log(navigation);
  return (
    <SafeAreaView style={{ backgroundColor: '#588518', flex: 1 }}>
      <Text>Delivery Details</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
        <Text>Go to Dashboard</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
