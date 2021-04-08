import React from 'react';
import { FlatList, StatusBar, TouchableOpacity, View } from 'react-native';
import { useHistory } from 'react-router-native';

// import { Container } from './styles';

import { products } from '~/utils/data';

import AccountCredit from '~/components/AccountCredit';

import ArrowLeft from '~/assets/icons/arrow-left.svg';

import { Header, HeaderText } from './styles';

export default function Credits() {
  const { goBack } = useHistory();

  return (
    <>
      <StatusBar backgroundColor="#000" barStyle="light-content" />

      <Header>
        <TouchableOpacity onPress={goBack}>
          <ArrowLeft width={30} height={30} />
        </TouchableOpacity>
        <HeaderText>
          Créditos&nbsp;
          <HeaderText style={{ fontWeight: 'bold' }}>Utilizados</HeaderText>
        </HeaderText>
      </Header>
      <FlatList
        data={products}
        keyExtractor={({ id }) => id}
        renderItem={AccountCredit}
        style={{
          backgroundColor: '#E0E6EA',
          width: '100%',
          paddingHorizontal: 29,
        }}
        ListFooterComponent={<View style={{ height: 10 }} />}
      />
    </>
  );
}
