import React from 'react';
import { View } from 'react-native';

import { Container, Input } from './styles';

import SearchIcon from '../../assets/icons/search-ico.svg';

export default function CustomInput() {
  return (
    <Container>
      <Input
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Procure Aqui"
        onChangeText={() => {}}
        returnKeyType="search"
      />
      <SearchIcon width={24} height={24} />
    </Container>
  );
}
