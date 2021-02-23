import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-native';

import {
  Container,
  OptionsContainer,
  OptionsButton,
  OptionsText,
  MenuOptionsButton,
  MenuOptionsText,
} from './styles';

import HeaderButton from '~/components/RoundButton';

import BackArrow from '~/assets/icons/back-icon.svg';
import FavoriteOn from '~/assets/icons/favoritos_active.svg';
import FavoriteOff from '~/assets/icons/favoritos.svg';
import { ScrollView } from 'react-native';

export default function MenuHeader({ favorite }) {
  const [isFavorite, setIsFavorite] = useState(favorite);
  const [menuOption, setMenuOption] = useState('entradas');
  const { goBack, push } = useHistory();

  const { pathname } = useLocation();

  return (
    <>
      <Container>
        <HeaderButton onPress={goBack}>
          <BackArrow width={46} height={46} />
        </HeaderButton>
        <OptionsContainer>
          <OptionsButton
            active={pathname === '/companies/cback'}
            onPress={() => push('/companies/cback')}
            style={{ width: 94 }}
          >
            <OptionsText active={pathname === '/companies/cback'}>
              CBack
            </OptionsText>
          </OptionsButton>
          <OptionsButton
            active={pathname === '/companies/menu'}
            onPress={() => push('/companies/menu')}
          >
            <OptionsText active={pathname === '/companies/menu'}>
              Cardápio
            </OptionsText>
          </OptionsButton>
        </OptionsContainer>
        <HeaderButton onPress={() => setIsFavorite(!isFavorite)}>
          {isFavorite ? (
            <FavoriteOn width={46} height={46} />
          ) : (
            <FavoriteOff width={46} height={46} />
          )}
        </HeaderButton>
      </Container>
      <Container>
        <ScrollView horizontal>
          <MenuOptionsButton
            onPress={() => setMenuOption('entradas')}
            active={menuOption === 'entradas'}
            style={{ height: 42, marginLeft: 0 }}
          >
            <MenuOptionsText active={menuOption === 'entradas'}>
              Entradas
            </MenuOptionsText>
          </MenuOptionsButton>
          <MenuOptionsButton
            onPress={() => setMenuOption('carnes')}
            active={menuOption === 'carnes'}
          >
            <MenuOptionsText active={menuOption === 'carnes'}>
              Carnes
            </MenuOptionsText>
          </MenuOptionsButton>
          <MenuOptionsButton
            onPress={() => setMenuOption('pratos')}
            active={menuOption === 'pratos'}
          >
            <MenuOptionsText active={menuOption === 'pratos'}>
              Pratos
            </MenuOptionsText>
          </MenuOptionsButton>
          <MenuOptionsButton
            onPress={() => setMenuOption('vegetarianos')}
            active={menuOption === 'vegetarianos'}
          >
            <MenuOptionsText active={menuOption === 'vegetarianos'}>
              Vegetarianos
            </MenuOptionsText>
          </MenuOptionsButton>
        </ScrollView>
      </Container>
    </>
  );
}
