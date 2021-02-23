import React, { useEffect, useMemo, useState } from 'react';
import { View } from 'react-native';

import {
  ProductTitle,
  ProductDescription,
  BottomContainer,
  PriceContainer,
  OldPrice,
  Price,
  AmountContainer,
  AmountButton,
  Amount,
  AdditionalOptions,
  Separator,
  TopContainer,
  ProductImage,
} from './styles';

import CartMinus from '~/assets/icons/cart-minus-button.svg';
import CartPlus from '~/assets/icons/cart-plus-button.svg';

import { formatPrice } from '~/utils/calculatePrice';

export default function CheckoutProduct({ product }) {
  const { id, title, address, rating, oldPrice, price, picture } = product;
  const [amount, setAmount] = useState(1);

  const formattedPrice = useMemo(() => price.replace('.', ','), []);
  const [currentPrice, setCurrentPrice] = useState(price);

  useEffect(() => {
    console.tron.log(price * amount);
    console.tron.log(price);
    console.tron.log(Number(price));
    const newPrice = formatPrice(Number(price) * amount);
    setCurrentPrice(newPrice.replace('.', ','));
  }, [price, amount]);

  return (
    <View>
      <TopContainer>
        <ProductImage source={picture} />
        <View
          style={{
            flexDirection: 'column',
            marginLeft: 8,
            flex: 1,
          }}
        >
          <ProductTitle>{title}</ProductTitle>
          <ProductDescription>{`${address}${address}${address}`}</ProductDescription>
        </View>
      </TopContainer>
      <AdditionalOptions />
      <BottomContainer>
        <PriceContainer>
          <OldPrice>de R$ {oldPrice} por</OldPrice>
          <Price>de R$ {formattedPrice}</Price>
        </PriceContainer>
        <AmountContainer>
          <AmountButton
            onPress={() => setAmount(amount - 1)}
            disabled={amount === 1}
            style={{ borderTopLeftRadius: 12, borderBottomLeftRadius: 12 }}
          >
            <CartMinus width={34} height={45} />
          </AmountButton>
          <Amount>{amount}</Amount>
          <AmountButton
            onPress={() => setAmount(amount + 1)}
            style={{
              borderTopRightRadius: 12,
              borderBottomRightRadius: 12,
            }}
          >
            <CartPlus width={34} height={45} />
          </AmountButton>
        </AmountContainer>
        <Price style={{ color: '#0047b1' }}>R$ {currentPrice}</Price>
      </BottomContainer>
      <Separator />
    </View>
  );
}
