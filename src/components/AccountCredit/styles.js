import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  /* height: 371px; */
  border-radius: 10px;
  background-color: #fff;
  padding: 0 20px 20px;
  margin-top: 20px;
`;

export const Content = styled.View`
  padding: 20px 0;
  border-style: solid;
  border-bottom-width: 0.5px;
  border-bottom-color: #ccc;
`;

export const Title = styled.Text`
  color: #000;
  font-size: 16px;
  line-height: 20px;
  font-weight: bold;
  /* background-color: #f0f; */
`;

export const Description = styled.Text`
  color: #939393;
  font-size: 14px;
  margin-top: 4px;
  line-height: 22px;
  /* background-color: #06f; */
`;

export const CBackTimeLeft = styled.Text`
  font-size: 13px;
  line-height: 19.5px;
  color: #000;
`;

export const CBackBoldTimeLeft = styled(CBackTimeLeft)`
  font-weight: bold;
`;
