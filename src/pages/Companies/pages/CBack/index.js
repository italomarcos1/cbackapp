import React, { useCallback, useMemo, useState } from 'react';
import { View } from 'react-native';
import { useHistory, useLocation } from 'react-router-native';

import {
  Container,
  Section,
  Tag,
  TagText,
  Title,
  Description,
  SocialMediaButton,
  RatingContainer,
  RatingTitle,
  RatingText,
  StarsContainer,
  OptionsContainer,
  OptionsButton,
  OptionsText,
} from './styles';

import Menu from '~/components/Menu';
import Header from '~/components/CBackHeader';
import RoundButton from '~/components/RoundButton';
import Button from '~/components/Button';
import QRCodeCredit from '~/components/QRCodeCredit';

import MapButton from '~/assets/icons/map-button.svg';
import MobileButton from '~/assets/icons/mobile-button.svg';

import FacebookIcon from '~/assets/icons/facebook-icon.svg';
import InstagramIcon from '~/assets/icons/instagram-icon.svg';

import StarFull from '~/assets/icons/star-full.svg';
import StarEmpty from '~/assets/icons/star-empty.svg';

export default function Favorites() {
  const [credits, setCredits] = useState([]);

  const { pathname } = useLocation();
  const { push } = useHistory();

  const creditInfo = useMemo(() => {
    return {
      price: '12,30',
      timeLeft: '12h12m',
      received_at: '12/01/2021 10:44',
      spent: '123,00',
    };
  }, []);

  const handleAddCredit = useCallback(() => {
    setCredits(prevState => [...prevState, creditInfo]);
  }, []);

  return (
    <>
      <Header favorite>
        <OptionsContainer>
          <OptionsButton
            active={pathname === '/companies/cback'}
            onPress={() => push('/companies/cback')}
          >
            <OptionsText active={pathname === '/companies/cback'}>
              CBack
            </OptionsText>
          </OptionsButton>
          <OptionsButton
            active={pathname === '/companies/menu'}
            onPress={() => push('/companies/menu')}
            style={{ left: 94 }}
          >
            <OptionsText active={pathname === '/companies/menu'}>
              Cardápio
            </OptionsText>
          </OptionsButton>
        </OptionsContainer>
      </Header>
      <Container contentContainerStyle={{ paddingHorizontal: 20 }}>
        <Section>
          <View style={{ width: 222 }}>
            <Tag>
              <TagText>Hamburgueria</TagText>
            </Tag>
            <Title>Hamburgueria do Barão</Title>
            <Description>Rua do Barão</Description>
          </View>
          <View style={{ height: 103, justifyContent: 'space-between' }}>
            <RoundButton>
              <MobileButton width={46} height={46} />
            </RoundButton>
            <RoundButton>
              <MapButton width={46} height={46} />
            </RoundButton>
          </View>
        </Section>
        <Section>
          <SocialMediaButton onPress={() => {}}>
            <FacebookIcon width={24} height={24} />
            <Description style={{ marginLeft: 9 }}>Seguir</Description>
          </SocialMediaButton>
          <SocialMediaButton onPress={() => {}}>
            <InstagramIcon width={24} height={24} />
            <Description style={{ marginLeft: 9 }}>Seguir</Description>
          </SocialMediaButton>
        </Section>
        <Section style={{ justifyContent: 'flex-start' }}>
          <RatingContainer>
            <RatingTitle>Já é um cliente</RatingTitle>
            <StarsContainer style={{ marginTop: 14 }}>
              <StarFull width={19} height={18} />
              <StarFull width={19} height={18} style={{ marginLeft: 8 }} />
            </StarsContainer>
            <StarsContainer>
              <StarFull width={19} height={18} />
              <StarFull width={19} height={18} style={{ marginLeft: 8 }} />
              <StarFull width={19} height={18} style={{ marginLeft: 8 }} />
            </StarsContainer>
            <StarsContainer>
              <StarFull width={19} height={18} />
              <StarFull width={19} height={18} style={{ marginLeft: 8 }} />
              <StarFull width={19} height={18} style={{ marginLeft: 8 }} />
              <StarFull width={19} height={18} style={{ marginLeft: 8 }} />
            </StarsContainer>
            <StarsContainer>
              <StarFull width={19} height={18} />
              <StarFull width={19} height={18} style={{ marginLeft: 8 }} />
              <StarFull width={19} height={18} style={{ marginLeft: 8 }} />
              <StarFull width={19} height={18} style={{ marginLeft: 8 }} />
              <StarFull width={19} height={18} style={{ marginLeft: 8 }} />
            </StarsContainer>
          </RatingContainer>
          <RatingContainer style={{ marginLeft: 10 }}>
            <StarsContainer>
              <StarFull width={19} height={18} />
              <StarEmpty width={19} height={18} style={{ marginLeft: 8 }} />
              <StarEmpty width={19} height={18} style={{ marginLeft: 8 }} />
              <StarEmpty width={19} height={18} style={{ marginLeft: 8 }} />
              <StarEmpty width={19} height={18} style={{ marginLeft: 8 }} />
            </StarsContainer>
            <View style={{ marginTop: 8 }}>
              <RatingText
                width={19}
                height={18}
                style={{ textDecorationLine: 'underline', marginLeft: 8 }}
              >
                Minha Conta
              </RatingText>
              <RatingText width={19} height={18} style={{ marginLeft: 8 }}>
                R$ 500,00
              </RatingText>
              <RatingText width={19} height={18} style={{ marginLeft: 8 }}>
                R$ 1.000,00
              </RatingText>
              <RatingText width={19} height={18} style={{ marginLeft: 8 }}>
                R$ 2.000,00
              </RatingText>
            </View>
          </RatingContainer>
        </Section>
        <Section style={{ justifyContent: 'center' }}>
          <Button
            text="Adicionar"
            boldText="Crédito"
            backgroundColor="#F03F39"
            style={{ marginTop: 0 }}
            onPress={handleAddCredit}
          />
        </Section>
        {credits.map((c, index) => (
          <Section>
            <QRCodeCredit
              key={index}
              creditInfo={c}
              onPress={() => handleSubmit('something')}
            />
          </Section>
        ))}
        <Section style={{ justifyContent: 'center' }}>
          <Button
            text="Ver"
            boldText="Créditos Utilizados"
            backgroundColor="#181818"
            style={{ marginTop: 0 }}
          />
        </Section>
      </Container>
      <Menu />
    </>
  );
}
