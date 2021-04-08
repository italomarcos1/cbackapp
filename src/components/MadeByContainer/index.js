import React from 'react';

import { Container, Text } from './styles';

import CbackBottomLogo from '~/assets/icons/cback-bottom.svg';
import TgooBottomLogo from '~/assets/icons/tgoo-bottom.svg';

export default function MadeByContainer({ style }) {
  return (
    <Container style={style}>
      <Text>
        <CbackBottomLogo width={50} height={10} />
        &nbsp;é um produto&nbsp;
      </Text>
      <TgooBottomLogo width={36} height={14} />
    </Container>
  );
}
