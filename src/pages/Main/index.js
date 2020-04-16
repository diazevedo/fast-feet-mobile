import React from 'react';

import { View, Text, SafeAreaView } from 'react-native';

const Main = () => (
  <SafeAreaView style={{ backgroundColor: '#025BBF', flex: 1 }}>
    <View
      style={{
        flex: 1,
        backgroundColor: '#025BBF',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Init</Text>
    </View>
  </SafeAreaView>
);

export default Main;
