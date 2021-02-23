import React, { useState } from 'react';
import { useHistory } from 'react-router-native';

import { Container } from './styles';

import HeaderButton from '~/components/RoundButton';

import BackArrow from '~/assets/icons/back-icon.svg';
import FavoriteOn from '~/assets/icons/favoritos_active.svg';
import FavoriteOff from '~/assets/icons/favoritos.svg';

export default function CBackHeader({ favorite, children, hasFavorite }) {
  const [isFavorite, setIsFavorite] = useState(favorite);
  const { goBack, push } = useHistory();

  return (
    <Container>
      <HeaderButton onPress={goBack}>
        <BackArrow width={46} height={46} />
      </HeaderButton>
      {children}
      <HeaderButton onPress={() => setIsFavorite(!isFavorite)}>
        {hasFavorite ? (
          isFavorite ? (
            <FavoriteOn width={46} height={46} />
          ) : (
            <FavoriteOff width={46} height={46} />
          )
        ) : (
          <></>
        )}
      </HeaderButton>
    </Container>
  );
}

CBackHeader.defaultProps = {
  hasFavorite: true,
  favorite: false,
};
