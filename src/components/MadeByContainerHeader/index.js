import React from 'react';

import { Container, Text } from './styles';

import CbackBottomLogo from '~/assets/icons/cback-bottom.svg';
import TgooBottomLogo from '~/assets/icons/tgoo-bottom.svg';

export default function MadeByContainerHeader({ style }) {
  return (
    <Container style={style}>
      <CbackBottomLogo width={106} height={24} />
      <Text>&nbsp;é um produto&nbsp;</Text>
      <TgooBottomLogo width={77} height={31} />
    </Container>
  );
}
