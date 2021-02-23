import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-native';

import {
  Container,
  Button,
  ButtonText,
  MadeByContainer,
  MadeByText,
} from './styles';

import Company from '~/assets/icons/empresa-button.svg';
import CompanyActive from '~/assets/icons/empresa-button_active.svg';
import CBack from '~/assets/icons/cback-button.svg';
import CBackActive from '~/assets/icons/cback-button_active.svg';
import Cart from '~/assets/icons/cart-button.svg';
import CartActive from '~/assets/icons/cart-button_active.svg';
import Account from '~/assets/icons/conta-button.svg';
import AccountActive from '~/assets/icons/conta-button_active.svg';

import CbackBottomLogo from '~/assets/icons/cback-bottom.svg';
import TgooBottomLogo from '~/assets/icons/tgoo-bottom.svg';

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
              <CompanyActive width={22} height={22} />
              <ButtonText style={{ color: '#4267B2' }}>Empresas</ButtonText>
            </>
          ) : (
            <>
              <Company width={22} height={22} />
              <ButtonText>Empresas</ButtonText>
            </>
          )}
        </Button>
        <Button onPress={() => push('/cback')}>
          {currentPathname === 'cback' ? (
            <>
              <CBackActive width={26} height={22} />
              <ButtonText style={{ color: '#F03F39' }}>Cback</ButtonText>
            </>
          ) : (
            <>
              <CBack width={26} height={22} />
              <ButtonText>Cback</ButtonText>
            </>
          )}
        </Button>
        <Button onPress={() => push('/cart')}>
          <>
            {currentPathname === 'cart' ? (
              <CartActive width={33} height={22} />
            ) : (
              <Cart width={33} height={22} />
            )}
            <ButtonText style={{ color: '#42B242' }}>R$ 0,00</ButtonText>
          </>
        </Button>
        <Button onPress={() => push('/account')}>
          <>
            {currentPathname === 'account' ? (
              <AccountActive width={20} height={22} />
            ) : (
              <Account width={20} height={22} />
            )}
            <ButtonText>Conta</ButtonText>
          </>
        </Button>
      </Container>
      <MadeByContainer>
        <MadeByText>
          <CbackBottomLogo width={50} height={10} />
          &nbsp;é um produto&nbsp;
        </MadeByText>
        <TgooBottomLogo width={36} height={14} />
      </MadeByContainer>
    </>
  );
}
