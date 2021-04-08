import React, { useState } from 'react';
import { View } from 'react-native';

import {
  Container,
  Picture,
  FavoriteButton,
  ProductInfo,
  Title,
  Description,
  RatingContainer,
  RatingTitle,
  StarsContainer,
  CBackContainer,
  CBack,
  CBackPrice,
  CBackTimeLeft,
} from './styles';

import StarFull from '~/assets/icons/star-full.svg';
import StarEmpty from '~/assets/icons/star-empty.svg';

import FavoriteOn from '~/assets/icons/favoritos_active.svg';
import FavoriteOff from '~/assets/icons/favoritos.svg';
import QRCode from '~/assets/icons/qrcode-ico.svg';

export default function CBackProduct({ product }) {
  const { title, address, rating, picture } = product;
  const [isFavorite, setIsFavorite] = useState(() => rating > 3);
  return (
    <Container index={product}>
      <FavoriteButton onPress={() => setIsFavorite(!isFavorite)}>
        {isFavorite ? (
          <FavoriteOn width={46} height={46} />
        ) : (
          <FavoriteOff width={46} height={46} />
        )}
      </FavoriteButton>
      <Picture source={picture} />
      <ProductInfo>
        <Title>{title}</Title>
        <Description>{address}</Description>
        <CBackContainer>
          <RatingContainer>
            <RatingTitle>Já é cliente</RatingTitle>
            <StarsContainer>
              {Array(rating)
                .fill(1)
                .map((_, index) => (
                  <StarFull key={`r${index}`} width={19} height={18} />
                ))}
              {Array(5 - rating)
                .fill(1)
                .map((_, index) => (
                  <StarEmpty key={`r${index}`} width={19} height={18} />
                ))}
            </StarsContainer>
          </RatingContainer>
        </CBackContainer>
        <CBack>
          <View
            style={{ padding: 5, borderRadius: 6, backgroundColor: '#fff' }}
          >
            <QRCode />
          </View>
          <View style={{ marginLeft: 13 }}>
            <CBackTimeLeft style={{ lineHeight: 18, color: '#000' }}>
              Crédito&nbsp;
              <CBackPrice>R$ 16,42</CBackPrice>
            </CBackTimeLeft>
            <CBackTimeLeft style={{ marginTop: 5 }}>
              Faltam 29 dias para expirar
            </CBackTimeLeft>
          </View>
        </CBack>
        <CBack>
          <View
            style={{ padding: 5, borderRadius: 6, backgroundColor: '#fff' }}
          >
            <QRCode />
          </View>
          <View style={{ marginLeft: 13 }}>
            <CBackTimeLeft style={{ lineHeight: 18, color: '#000' }}>
              Crédito&nbsp;
              <CBackPrice>R$ 16,42</CBackPrice>
            </CBackTimeLeft>
            <CBackTimeLeft style={{ marginTop: 5 }}>
              Faltam 29 dias para expirar
            </CBackTimeLeft>
          </View>
        </CBack>
      </ProductInfo>
    </Container>
  );
}
