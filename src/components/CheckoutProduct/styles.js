import styled from 'styled-components';

export const TopContainer = styled.View`
  width: 100%;
  flex-direction: row;
  margin-top: 23px;
  justify-content: space-between;
`;

export const ProductImage = styled.Image`
  height: 80px;
  width: 80px;
  border-radius: 10px;
`;

export const ProductTitle = styled.Text`
  color: #000;
  font-size: 14px;
  line-height: 20px;
  font-weight: bold;
  /* background-color: #f0f; */
`;

export const ProductDescription = styled.Text`
  color: #939393;
  font-size: 12px;
  line-height: 16px;
  margin-top: 4px;
  /* background-color: #06f; */
`;

export const BottomContainer = styled.View`
  width: 100%;
  height: 55px;
  flex-direction: row;
  align-items: flex-end;
  margin-top: 10px;
  /* background-color: #f90; */
  justify-content: space-between;
`;

export const PriceContainer = styled.View`
  height: 55px;
  justify-content: flex-end;
`;

export const OldPrice = styled.Text`
  font-size: 12px;
  color: #000;
  /* background-color: #390; */
`;

export const Price = styled.Text`
  font-size: 21px;
  /* background-color: #090; */
  /* color: #0047b1; */

  color: #6c9be2;
  font-weight: bold;
`;

export const AmountContainer = styled.View`
  height: 45px;
  width: 103px;
  /* background-color: #ff0; */
  align-items: center;
  flex-direction: row;
`;

export const AmountButton = styled.TouchableOpacity`
  width: 34px;
  height: 45px;
  align-items: center;
  justify-content: center;
`;

export const Amount = styled.Text`
  font-size: 18px;
  color: #393939;
  margin: 0 8px;
`;

export const AdditionalOptions = styled.TextInput`
  width: 100%;
  border-style: solid;
  border-color: #d8d8d8;
  border-width: 1px;
  height: 53px;
  padding: 7px 12px;
  color: #f03f39;
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
  text-decoration: none;
  margin-top: 10px;
`;

export const Separator = styled.View`
  width: 100%;
  background-color: #0047b1;
  height: 2px;
  margin-top: 21px;
`;
