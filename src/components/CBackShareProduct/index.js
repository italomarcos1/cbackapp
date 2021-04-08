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
  SocialMediaButtonContainer,
  SocialMediaButton,
} from './styles';

import RoundButton from '~/components/RoundButton';

import StarFull from '~/assets/icons/star-full.svg';
import StarEmpty from '~/assets/icons/star-empty.svg';

import FacebookIcon from '~/assets/icons/facebook-icon.svg';
import InstagramIcon from '~/assets/icons/instagram-icon.svg';

import MapButton from '~/assets/icons/map-button.svg';
import MobileButton from '~/assets/icons/mobile-button.svg';
import SiteButton from '~/assets/icons/site_button.svg';
import WhatsappButton from '~/assets/icons/whatsapp_button.svg';

import FavoriteOn from '~/assets/icons/favoritos_active.svg';
import FavoriteOff from '~/assets/icons/favoritos.svg';

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
        <SocialMediaButtonContainer style={{ height: 46 }}>
          <RoundButton>
            <MobileButton width={46} height={46} />
          </RoundButton>
          <RoundButton>
            <WhatsappButton width={46} height={46} />
          </RoundButton>
          <RoundButton>
            <MapButton width={46} height={46} />
          </RoundButton>
          <RoundButton>
            <SiteButton width={46} height={46} />
          </RoundButton>
        </SocialMediaButtonContainer>
        <SocialMediaButtonContainer>
          <SocialMediaButton onPress={() => {}}>
            <FacebookIcon width={24} height={24} />
            <Description style={{ marginLeft: 9 }}>Seguir</Description>
          </SocialMediaButton>
          <SocialMediaButton onPress={() => {}}>
            <InstagramIcon width={24} height={24} />
            <Description style={{ marginLeft: 9 }}>Seguir</Description>
          </SocialMediaButton>
        </SocialMediaButtonContainer>
      </ProductInfo>
    </Container>
  );
}
