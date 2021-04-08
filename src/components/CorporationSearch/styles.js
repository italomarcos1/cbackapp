import styled from 'styled-components/native';
import Tag from '~/components/Tag';

export const Container = styled.View`
  width: 100%;
  position: relative;
  border-radius: 30px;
  border-style: solid;
  border-width: 1px;
  border-color: #0047b1;
  padding-top: 10px;
  padding-bottom: 20px;
  background-color: #fff;
  padding-left: 34px;
  /* height: 60px; */
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

export const TagContainer = styled.View`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const CustomTag = styled(Tag)`
  border-radius: 2px;
`;
