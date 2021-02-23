import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 36px;
  padding-top: 50px;
  background-color: #fff;
`;

export const Title = styled.Text`
  color: #000;
  font-size: 30px;
  align-self: center;
  /* line-height: 20px; */
  font-weight: bold;
  margin-bottom: 67px;
  /* background-color: #f0f; */
`;

export const HeaderTitle = styled.Text`
  color: #000;
  font-size: 16px;
  align-self: center;
  font-weight: bold;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 116px;
  padding-left: 35px;
  align-items: center;
  flex-direction: row;
  background-color: #4267b2;
  /* border-style: solid; */
  /* border-bottom-color: #638ad9; */
  /* border-bottom-width: 6px; */
  border-radius: 20px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  line-height: 22px;
  font-weight: bold;
  color: #fff;
  margin-left: 8px;
`;
