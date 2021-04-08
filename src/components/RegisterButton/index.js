import React from 'react';
import { useHistory } from 'react-router-native';

import { Container, Text } from './styles';

export default function RegisterButton() {
  const { push } = useHistory();
  return (
    <Container onPress={() => push('/register')}>
      <Text>
        Novo&nbsp;
        <Text style={{ fontWeight: 'bold' }}>Registro</Text>
      </Text>
    </Container>
  );
}
