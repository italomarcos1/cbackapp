import styled from 'styled-components/native';

export const HeaderTitle = styled.Text`
  color: #000;
  font-size: 16px;
  align-self: center;
  font-weight: bold;
  /* background-color: #390; */
`;

export const StarsContainer = styled.View`
  width: 100%;
  flex-direction: row;
  height: 18px;
  margin-top: 4px;
  /* background-color: #f00; */
`;

export const Container = styled.View`
  height: 60px;
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

export const MenuOptionsButton = styled.TouchableOpacity`
  height: 37px;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  border-radius: 25px;
  background-color: ${({ active }) => (active ? '#333' : 'transparent')};
  margin-left: 10px;
`;

export const MenuOptionsText = styled.Text`
  color: ${({ active }) => (active ? '#FFF' : '#333')};
  /* background-color: #f0f; */
  font-size: 14px;
  line-height: 20px;
`;
