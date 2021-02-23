import React, { useState } from 'react';
import { useHistory } from 'react-router-native';

import {
  Container,
  Picture,
  ProductInfo,
  Title,
  BottomContainer,
  Description,
  PriceContainer,
  Price,
  OldPrice,
} from './styles';

import Button from '~/components/RoundButton';

import PlusButton from '~/assets/icons/plus-button.svg';

export default function MenuProduct({ product }) {
  const { title, address, rating, picture } = product;

  const { push } = useHistory();

  return (
    <Container index={product} onPress={() => push('/companies/cback')}>
      <Picture source={picture} />
      <ProductInfo>
        <Title>{title}</Title>
        <Description>{address}</Description>
        <BottomContainer>
          <PriceContainer>
            <OldPrice>de R$ 18,00 por</OldPrice>
            <Price>de R$ 16,70</Price>
          </PriceContainer>
          <Button onPress={() => push('/companies/delivery')}>
            <PlusButton width={46} height={46} />
          </Button>
        </BottomContainer>
      </ProductInfo>
    </Container>
  );
}
