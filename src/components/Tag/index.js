import React from 'react';

import { Container, TagButton, TagName } from './styles';

export default function Tag({ children, style }) {
  return (
    <Container style={style}>
      <TagButton onPress={() => {}}>
        <TagName>{children}</TagName>
      </TagButton>
    </Container>
  );
}
