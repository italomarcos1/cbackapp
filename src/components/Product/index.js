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
} from './styles';

import StarFull from '~/assets/icons/star-full.svg';
import StarEmpty from '~/assets/icons/star-empty.svg';

import FavoriteOn from '~/assets/icons/favoritos_active.svg';
import FavoriteOff from '~/assets/icons/favoritos.svg';
import { useHistory } from 'react-router-native';

export default function Product({ product }) {
  const { title, address, rating, picture } = product;
  const [isFavorite, setIsFavorite] = useState(() => rating > 3);

  const { push } = useHistory();

  return (
    <Container index={product} onPress={() => push('/companies/cback')}>
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
      </ProductInfo>
    </Container>
  );
}
