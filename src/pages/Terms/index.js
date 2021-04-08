import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useHistory } from 'react-router-native';

import { Container, Header } from './styles';

import Button from '~/components/Button';
import MadeByContainer from '~/components/MadeByContainerHeader';

import Check from '~/assets/icons/check.svg';
import CbackBottomLogo from '~/assets/icons/cback-bottom.svg';

export default function Terms() {
  const { push, goBack } = useHistory();

  const [accepted, setAccepted] = useState(false);

  return (
    <>
      <Header>
        <MadeByContainer />
      </Header>
      <Container
        contentContainerStyle={{
          paddingTop: 19,
          alignItems: 'center',
          width: '100%',
        }}
      >
        <View
          style={{
            // paddingTop: 7.25,
            paddingHorizontal: 22,
            paddingBottom: 20,
            width: '100%',
            backgroundColor: '#fff',
          }}
        >
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
            Termos de Utilização
          </Text>
          <Text style={{ marginTop: 29, fontSize: 14 }}>
            Em vigor&nbsp;
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 14,
                textTransform: 'uppercase',
              }}
            >
              01 de Março de 2021
            </Text>
          </Text>
          <Text style={{ marginTop: 29, fontSize: 14 }}>
            Versão do país:&nbsp;
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 14,
                textTransform: 'uppercase',
              }}
            >
              Brasil
            </Text>
          </Text>
          <Text style={{ marginTop: 29, fontSize: 14 }}>
            O presente termo de utilização reflete o modo de funcionamento do
            Aplicativo CBack da TGOO Worldwide para a sua Empresa.
          </Text>
          <Text style={{ marginTop: 29, fontSize: 14 }}>
            O que pode esperar de nós.
          </Text>
          <CbackBottomLogo width={108} height={25} style={{ marginTop: 52 }} />
        </View>
        <View
          style={{
            backgroundColor: '#eaeceb',
            width: '100%',
            paddingVertical: 13,
            paddingHorizontal: 20,
          }}
        >
          <Text style={{ fontSize: 14, lineHeight: 20 }}>
            O Aplicativo está disponível nas lojas oficiais do&nbsp;
            <Text style={{ fontWeight: 'bold' }}>Google Play</Text> e&nbsp;
            <Text style={{ fontWeight: 'bold' }}>App Store;</Text>
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            width: '100%',
            paddingVertical: 13,
            paddingHorizontal: 20,
          }}
        >
          <Text style={{ fontSize: 14, lineHeight: 20 }}>
            Criação de banco de dados com todos os seus clientes com geração de
            relatórios:
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#eaeceb',
            width: '100%',
            paddingVertical: 13,
            paddingHorizontal: 20,
          }}
        >
          <Text style={{ fontSize: 14, lineHeight: 20 }}>
            Nome, Sexo, Facebook, Email, WhatsApp e produtos que comprou.
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            width: '100%',
            paddingVertical: 13,
            paddingHorizontal: 20,
          }}
        >
          <Text style={{ fontSize: 14, lineHeight: 20 }}>
            Motivação para seus clientes em conquistar as 5 estrelas da sua
            empresa:
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#eaeceb',
            width: '100%',
            paddingVertical: 13,
            paddingHorizontal: 20,
          }}
        >
          <Text style={{ fontSize: 14, lineHeight: 20 }}>
            Metas de consumo em R$, Seguir Facebook, Seguir Instagram,
            WhatsApp...
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            width: '100%',
            paddingVertical: 13,
            paddingHorizontal: 20,
          }}
        >
          <Text style={{ fontSize: 14, lineHeight: 20 }}>
            Geração de&nbsp;<Text style={{ fontWeight: 'bold' }}>QR Code</Text>
            &nbsp;para créditos de 5%, para próxima compra do seu cliente;
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#eaeceb',
            width: '100%',
            paddingVertical: 13,
            paddingHorizontal: 20,
          }}
        >
          <Text style={{ fontSize: 14, lineHeight: 20 }}>
            Nós entramos em contato com o cliente para retornar a sua empresa;
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            width: '100%',
            paddingVertical: 13,
            paddingHorizontal: 20,
          }}
        >
          <Text style={{ fontSize: 14, lineHeight: 20 }}>
            Divulgamos os seus produtos via Facebook, WhatsApp e SMS para os
            seus clientes;
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#eaeceb',
            width: '100%',
            paddingVertical: 13,
            paddingHorizontal: 20,
          }}
        >
          <Text style={{ fontSize: 14, lineHeight: 20 }}>
            Nós somos o seu vendedor online por&nbsp;
            <Text style={{ fontWeight: 'bold' }}>5% de comissão</Text>, exemplo:
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            width: '100%',
            paddingVertical: 13,
            paddingHorizontal: 20,
          }}
        >
          <Text style={{ fontSize: 14, lineHeight: 20 }}>
            O nosso aplicativo gera um crédito de 5% em QRCODE para o seu
            cliente utilizar na próxima compra, quando o crédito for utilizado a
            TGOO recebe os&nbsp;
            <Text style={{ fontWeight: 'bold' }}>5% de comissão</Text>, exemplo:
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#eaeceb',
            width: '100%',
            paddingVertical: 13,
            paddingHorizontal: 20,
          }}
        >
          <Text style={{ fontSize: 14, lineHeight: 20 }}>
            O cliente gastou de R$ 10,00 e recebeu&nbsp;
            <Text style={{ fontWeight: 'bold' }}>R$ 0,50</Text> de crédito em
            QRCODE.
            {'\n'}A TGOO só receberá a comissão de&nbsp;
            <Text style={{ fontWeight: 'bold' }}>R$ 0,50</Text> se o cliente
            utilizar o crédito.
          </Text>
        </View>
        <View
          style={{
            paddingTop: 25,
            paddingLeft: 9,
            paddingBottom: 20,
            paddingRight: 30,
            width: '90%',
            flexDirection: 'row',
          }}
        >
          <TouchableOpacity
            style={{
              height: 35,
              width: 35,
              borderWidth: 1,
              borderColor: '#4267b2',
              borderStyle: 'solid',
              borderRadius: 18,
              marginRight: 15,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => setAccepted(!accepted)}
          >
            {accepted && <Check />}
          </TouchableOpacity>
          <View style={{ paddingRight: 20 }}>
            <Text style={{ fontSize: 14, lineHeight: 20 }}>
              Eu&nbsp;
              <Text style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
                Paulo Ribeiro
              </Text>
              &nbsp; proprietário da&nbsp;
              <Text style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
                Villa Roma Pizzaria
              </Text>
              &nbsp;sob o&nbsp;
              <Text style={{ fontWeight: 'bold' }}>CNPJ 17.670.046/001-10</Text>
              &nbsp;concordo com o Termo de Utilização de funcionamento do
              Aplicativo CBACK da TGOO Worldwide.
            </Text>
            <Text style={{ marginTop: 26 }}>
              A ativação desta aceitação será efetuada pelo celular&nbsp;
              <Text style={{ fontWeight: 'bold' }}>33 99149-1885</Text>.
            </Text>
          </View>
        </View>
        <Button
          boldText="ACEITAR OS TERMOS"
          backgroundColor={accepted ? '#42b242' : '#EAECEB'}
          onPress={() => {}}
          disabled={!accepted}
          style={{
            width: '100%',
            height: 98,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 0,
            marginTop: 60,
          }}
          fontStyle={{
            fontSize: 24,
            lineHeight: 32,
          }}
        />
      </Container>
    </>
  );
}
