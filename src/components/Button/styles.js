import styled, { css } from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 285px;
  height: 55px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 20px;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  line-height: 22px;
  color: #fff;
`;

export const ButtonBoldText = styled(ButtonText)`
  font-weight: bold;
`;
