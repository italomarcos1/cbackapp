import styled from 'styled-components/native';

export const Container = styled.View`
  height: 66px;
  width: 100%;
  flex-direction: row;
  padding: 0 20px;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-style: solid;
  border-bottom-width: 0.5px;
  border-bottom-color: #ccc;
`;

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

export const MenuOptionsButton = styled.TouchableOpacity`
  height: 37px;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  border-radius: 20px;
  background-color: ${({ active }) => (active ? '#333' : 'transparent')};
  margin-left: 10px;
`;

export const MenuOptionsText = styled.Text`
  color: ${({ active }) => (active ? '#FFF' : '#333')};
  /* background-color: #f0f; */
  font-size: 14px;
  line-height: 20px;
`;
