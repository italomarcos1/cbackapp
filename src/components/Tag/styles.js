import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: flex-end;
  height: 48px;
  background-color: #e0e6ea;
  margin-right: 20px;
`;

export const TagButton = styled.TouchableOpacity`
  padding: 0 18px;
  align-items: center;
  justify-content: center;
  height: 28px;
  background-color: #000;
  border-radius: 20px;
`;

export const TagName = styled.Text`
  font-size: 12px;
  color: #fff;
`;
