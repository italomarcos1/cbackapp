import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 60px;
  background-color: #fafafa;
  border-radius: 30px;
  padding: 0 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#595959',
})`
  height: 40px;
  background-color: transparent;
  width: 87.5%;
  color: #444;
`;
