import styled, { css } from 'styled-components/native';
import TextInputMask from 'react-native-text-input-mask';

export const Container = styled.View`
  width: 100%;
  position: relative;
  border-radius: 30px;
  border-style: solid;
  border-width: 1px;
  border-color: #0047b1;
  justify-content: flex-end;
  padding-bottom: 15px;
  background-color: #fff;

  padding-left: 34px;
  height: 60px;
  margin-top: 30px;

  ${({ error }) =>
    error &&
    css`
      border-color: #f53030;
      border-width: 2px;
    `}
`;

export const Label = styled.Text`
  font-size: 14px;
  line-height: 22px;
  color: #000;
  background-color: #fff;
  position: absolute;
  padding: 0 13.5px 0 8px;
  left: 34px;
  top: -10px;

  ${({ error }) =>
    error &&
    css`
      color: #f53030;
    `}
`;

export const InputContainer = styled.View`
  height: 23px;
  width: 82.5%;
  flex-direction: row;
`;

export const AreaContainer = styled.View`
  height: 23px;
  flex-direction: row;
  padding-left: 7px;
  align-items: center;
`;

export const AreaCode = styled.Text`
  color: #000;
  font-size: 16px;
  margin-right: 8px;
  font-weight: bold;
`;

export const Input = styled(TextInputMask).attrs({
  placeholderTextColor: '#999',
})`
  width: 100%;
  height: 23px;
  font-size: 16px;
  padding: 0;
  color: #000;
  margin-left: 20px;
`;
