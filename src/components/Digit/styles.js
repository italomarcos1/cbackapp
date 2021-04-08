import styled from 'styled-components/native';

export const Container = styled.View`
  width: ${({ width }) => width}px;
  height: ${({ width }) => width}px;
  border-radius: 1000px;
  justify-content: center;
  align-items: center;
  border-style: solid;
  border-color: #333;
  border-width: 1px;
  text-align: center;
`;

export const CustomInput = styled.TextInput`
  flex: 1;
  text-align: center;
  font-size: 30px;
  color: #4267b2;
  /* background-color: #ccc; */
  font-weight: bold;
`;
