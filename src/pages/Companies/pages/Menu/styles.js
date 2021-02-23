import styled from 'styled-components/native';

export const OptionsContainer = styled.View`
  height: 37px;
  width: 203px;
  border-radius: 20px;
  background-color: #f4f4f4;
  flex-direction: row;
`;

export const OptionsButton = styled.TouchableOpacity`
  width: 109px;
  height: 37px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: ${({ active }) => (active ? '#0047B1' : 'transparent')};
`;

export const OptionsText = styled.Text`
  color: ${({ active }) => (active ? '#FFF' : '#B7B7B7')};
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
`;
