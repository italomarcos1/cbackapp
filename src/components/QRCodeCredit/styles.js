import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  /* height: 371px; */
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

export const Title = styled.View`
  flex-direction: row;
  height: 26px;
  align-items: flex-end;
`;

export const CBackPrice = styled.Text`
  font-size: 22px;
  line-height: 22px;
  color: #ffdc4b;
  font-weight: bold;
`;

export const CBackTimeLeft = styled.Text`
  font-size: 13px;
  line-height: 19.5px;
  color: #fff;
`;

export const CBackBoldTimeLeft = styled(CBackTimeLeft)`
  font-weight: bold;
`;
