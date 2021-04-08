import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-native';

import { Container, Button, ButtonText } from './styles';

import MadeByContainer from '../MadeByContainer';

import Search from '~/assets/icons/search-button.svg';
import SearchActive from '~/assets/icons/search-button_active.svg';
import Favorite from '~/assets/icons/favorite.svg';
import FavoriteActive from '~/assets/icons/favorite_active.svg';
import CBack from '~/assets/icons/cback-button.svg';
import CBackActive from '~/assets/icons/cback-button_active.svg';
import Account from '~/assets/icons/conta-button.svg';
import AccountActive from '~/assets/icons/conta-button_active.svg';

export default function Menu() {
  const { pathname } = useLocation();
  const { push } = useHistory();

  const [currentPathname, setCurrentPathname] = useState(pathname);

  useEffect(() => {
    const formattedPathname = pathname.split('/');
    console.log(formattedPathname);
    setCurrentPathname(formattedPathname[1]);
  }, [pathname]);

  return (
    <>
      <Container>
        <Button onPress={() => push('/')}>
          {['companies', ''].includes(currentPathname) ? (
            <>
              <SearchActive width={22} height={22} />
              <ButtonText style={{ color: '#4267B2' }}>Procurar</ButtonText>
            </>
          ) : (
            <>
              <Search width={22} height={22} />
              <ButtonText>Procurar</ButtonText>
            </>
          )}
        </Button>
        <Button onPress={() => push('/favorites')}>
          {currentPathname === 'favorites' ? (
            <>
              <FavoriteActive width={26} height={22} />
              <ButtonText style={{ color: '#ff6721' }}>Favoritos</ButtonText>
            </>
          ) : (
            <>
              <Favorite width={26} height={22} />
              <ButtonText>Favoritos</ButtonText>
            </>
          )}
        </Button>
        <Button onPress={() => push('/cback')}>
          <>
            {currentPathname === 'cback' ? (
              <>
                <CBackActive width={33} height={22} />
                <ButtonText style={{ color: '#F03F39' }}>CBack</ButtonText>
              </>
            ) : (
              <>
                <CBack width={33} height={22} />
                <ButtonText>CBack</ButtonText>
              </>
            )}
          </>
        </Button>
        <Button onPress={() => push('/account')}>
          <>
            {currentPathname === 'account' ? (
              <>
                <AccountActive width={20} height={22} />
                <ButtonText style={{ color: '#333' }}>Conta</ButtonText>
              </>
            ) : (
              <>
                <Account width={20} height={22} />
                <ButtonText>Conta</ButtonText>
              </>
            )}
          </>
        </Button>
      </Container>
      <MadeByContainer />
    </>
  );
}
