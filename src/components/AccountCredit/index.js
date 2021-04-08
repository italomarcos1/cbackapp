import React from 'react';

import {
  Container,
  Content,
  Title,
  Description,
  CBackTimeLeft,
  CBackBoldTimeLeft,
} from './styles';

import CBack from '~/components/AccountCBack';

export default function AccountCredit({ style }) {
  // const { price, timeLeft, received_at, spent } = creditInfo;

  return (
    <Container style={style}>
      <Content>
        <Title>Sorveteria Livia</Title>
        <Description>Rua Francisca Julia, 465 Santana</Description>
        <CBack style={{ marginTop: 10 }} />
      </Content>
      <Content>
        <CBackTimeLeft>
          Crédito:
          <CBackBoldTimeLeft>&nbsp;6,50</CBackBoldTimeLeft>
        </CBackTimeLeft>
        <CBackTimeLeft>Total da compra:&nbsp;R$ 123,00</CBackTimeLeft>
        <CBackTimeLeft>Dia da compra:&nbsp;11/03/2021 - 11:44</CBackTimeLeft>
        <CBackTimeLeft>
          Crédito utilizado:
          <CBackBoldTimeLeft>&nbsp;11/03/2021 - 11:44</CBackBoldTimeLeft>
        </CBackTimeLeft>
      </Content>
      <Content>
        <CBackTimeLeft>
          Crédito:
          <CBackBoldTimeLeft>&nbsp;6,50</CBackBoldTimeLeft>
        </CBackTimeLeft>
        <CBackTimeLeft>Total da compra:&nbsp;R$ 123,00</CBackTimeLeft>
        <CBackTimeLeft>Dia da compra:&nbsp;11/03/2021 - 11:44</CBackTimeLeft>
        <CBackTimeLeft>
          Crédito utilizado:
          <CBackBoldTimeLeft>&nbsp;11/03/2021 - 11:44</CBackBoldTimeLeft>
        </CBackTimeLeft>
      </Content>
    </Container>
  );
}
