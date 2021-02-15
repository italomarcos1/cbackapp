import React from 'react';
import { View, Text } from 'react-native';
import { NativeRouter } from 'react-router-native';

export default function App() {
  return (
    <NativeRouter>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: '#63c' }}>Pogchamp</Text>
      </View>
    </NativeRouter>
  );
}
