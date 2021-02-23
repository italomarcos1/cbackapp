import styled from 'styled-components/native';
import { Link } from 'react-router-native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  /* height: 260px; */
  border-radius: 20px;
  background-color: #fff;
  margin-top: 21px;
  padding-bottom: 5px;
  position: relative;
`;

export const Picture = styled.Image`
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  height: 240px;
  width: 100%;
  position: relative;
`;

export const ProductInfo = styled(Container)`
  padding: 16px 20px 0px;
  margin-top: 0;
  background-color: transparent;
`;

export const Title = styled.Text`
  color: #000;
  font-size: 16px;
  line-height: 20px;
  font-weight: bold;
  /* background-color: #f0f; */
`;

export const BottomContainer = styled.View`
  width: 100%;
  height: 63px;
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
  justify-content: space-between;
`;

export const PriceContainer = styled.View`
  height: 59px;
`;

export const OldPrice = styled.Text`
  font-size: 14px;
  line-height: 14px;
  color: #000;
`;

export const Price = styled.Text`
  font-size: 28px;
  line-height: 28px;
  color: #0047b1;
  font-weight: bold;
  margin-top: 8px;
`;

export const Description = styled.Text`
  color: #939393;
  font-size: 12px;
  margin-top: 4px;
  line-height: 20px;
  /* background-color: #06f; */
`;
