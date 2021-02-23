import styled from 'styled-components/native';

export const Container = styled.View`
  width: 320px;
  height: 371px;
  border-radius: 20px;
  background-color: #4267b2;
  padding: 20px 34px;
`;

export const QRCode = styled.Image`
  width: 247px;
  height: 247px;
  margin-top: 12px;
  background-color: #f90;
`;

export const CBackPrice = styled.Text`
  font-size: 26px;
  line-height: 26px;
  color: #fff;
  font-weight: bold;
`;

export const CBackTimeLeft = styled.Text`
  font-size: 12px;
  line-height: 20px;
  color: #fff;
`;

export const CBackBoldTimeLeft = styled.Text`
  font-size: 12px;
  color: #ffdc4b;
  font-weight: bold;
`;
