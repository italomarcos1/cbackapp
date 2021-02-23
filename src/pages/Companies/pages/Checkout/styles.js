import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #fff;
`;

export const HeaderTitle = styled.Text`
  color: #000;
  font-size: 16px;
  align-self: center;
  font-weight: bold;
`;

export const PickYourTable = styled.View`
  width: 100%;
  height: 88px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  border-style: solid;
  border-bottom-color: #0047b1;
  border-bottom-width: 2px;
`;

export const PickYourTableSelect = styled.TouchableOpacity`
  font-size: 18px;
  width: 134px;
  height: 44px;
  flex-direction: row;
`;

export const TableNumberContainer = styled.View`
  width: 83.5px;
  height: 44px;
  border-style: solid;
  border-width: 2px;
  border-color: #f03f39;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const TableNumberText = styled.Text`
  font-size: 18px;
  color: #f03f39;
  font-weight: bold;
`;

export const TableNumberPickerButton = styled.View`
  width: 50.5px;
  height: 44px;
  border-style: solid;
  border-width: 2px;
  border-left-width: 0px;
  border-color: #f03f39;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  align-items: center;
  justify-content: center;
`;

export const Price = styled.Text`
  font-size: 21px;
  /* background-color: #090; */
  /* color: #0047b1; */

  color: #6c9be2;
  font-weight: bold;
`;
