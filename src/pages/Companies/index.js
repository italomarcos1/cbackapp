import React from 'react';
import { StatusBar, FlatList, View } from 'react-native';
import { useHistory } from 'react-router-native';

import { Container, TagContainer } from './styles';

import CustomInput from '~/components/SearchInput';
import CreditContainer from '~/components/CreditContainer';
import Menu from '~/components/Menu';
import Product from '~/components/Product';

import burger from '~/assets/burger.jpeg';
import fries from '~/assets/fries.jpeg';
import brownie from '~/assets/brownie.jpg';
import Tag from '~/components/Tag';

export default function Companies() {
  return (
    <>
      <View style={{ flex: 1, backgroundColor: '#E0E6EA' }}>
        <StatusBar backgroundColor="#E0E6EA" barStyle="dark-content" />
        <View
          style={{
            paddingHorizontal: 29,
            width: '100%',
            marginTop: 7,
            paddingTop: 10,
          }}
        >
          <CustomInput />
          <TagContainer>
            <Tag>Hamburgueria</Tag>
            <Tag>Restaurante</Tag>
            <Tag>Bar</Tag>
            <Tag>Loja de Calçados</Tag>
          </TagContainer>
          <CreditContainer />
        </View>
      </View>
      <Menu />
    </>
  );
}

// 1 - denial
// 2 - itching
// 3 - extreme thirst & urination
// 4 - excessive gas
// 5 - acute paranoia
// 6 - uncontrolled perspiration
// 7 - HOMICIDAL RAGE
