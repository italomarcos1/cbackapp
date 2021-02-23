import styled from 'styled-components/native';
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
`;

export const Input = styled(TextInputMask).attrs({
  placeholderTextColor: '#999',
})`
  width: 90%;
  height: 23px;
  font-size: 16px;
  padding: 0;
  color: #000;
`;
