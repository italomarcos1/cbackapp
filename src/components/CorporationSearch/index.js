import React from 'react';

import { Container, CustomTag, Label, TagContainer } from './styles';

export default function CorporationSearch() {
  return (
    <Container>
      <Label>Busca da Empresa</Label>
      <TagContainer>
        <CustomTag style={{ backgroundColor: '#fff' }}>Restaurante</CustomTag>
        <CustomTag style={{ backgroundColor: '#fff' }}>Pizza</CustomTag>
        <CustomTag style={{ backgroundColor: '#fff' }}>Pizzaria</CustomTag>
      </TagContainer>
    </Container>
  );
}
