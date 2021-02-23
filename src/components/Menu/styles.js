import styled from 'styled-components/native';

export const Container = styled.View`
  height: 57px;
  width: 100%;
  padding: 0 24px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  border-style: solid;
  border-bottom-width: 0.5px;
  border-bottom-color: #ccc;
  background-color: #fff;
`;

export const Button = styled.TouchableOpacity`
  height: 57px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-size: 10px;
  line-height: 12px;
  color: #bdbdbd;
  text-transform: uppercase;
  margin-top: 5px;
  font-weight: bold;
`;

export const MadeByContainer = styled.View`
  height: 48px;
  width: 100%;
  background-color: #fff;
  flex-direction: row;
  justify-content: center;
  padding-top: 11px;
`;

export const MadeByText = styled.Text`
  font-size: 10px;
  color: #868686;
`;
