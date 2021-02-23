import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #fff;
`;

export const Section = styled.View`
  padding: 20px 0;
  flex-direction: row;
  justify-content: space-between;
  border-style: solid;
  border-bottom-color: #ccc;
  border-bottom-width: 0.5px;
`;

export const Tag = styled.View`
  background-color: #ccdaef;
  border-radius: 12px;
  width: 113px;
  height: 24px;
  align-items: center;
  justify-content: center;
`;

export const TagText = styled.Text`
  color: #0047b1;
  font-size: 12px;
  line-height: 14px;
`;

export const Title = styled.Text`
  color: #000;
  font-size: 18px;
  line-height: 20px;
  font-weight: bold;
  margin-top: 16px;
  /* background-color: #f0f; */
`;

export const Description = styled.Text`
  color: #939393;
  font-size: 14px;
  margin-top: 4px;
  line-height: 20px;
  /* background-color: #06f; */
`;

export const SocialMediaButton = styled.TouchableOpacity`
  width: 149px;
  height: 60px;
  background-color: #fff;
  border-radius: 30px;
  border-style: solid;
  border-color: #ccc;
  border-width: 0.5px;
  padding-left: 18px;
  flex-direction: row;
  align-items: center;
`;

export const RatingContainer = styled.View`
  justify-content: space-between;
  align-self: flex-end;
`;

export const RatingTitle = styled(Title)`
  font-size: 14px;
  margin-top: 0;
`;

export const RatingText = styled(Title)`
  font-size: 14px;
  line-height: 16px;
  margin-top: 10px;
  font-weight: normal;
`;

export const StarsContainer = styled.View`
  width: 100%;
  flex-direction: row;
  height: 18px;
  margin-top: 8px;
`;

export const OptionsContainer = styled.View`
  height: 37px;
  width: 203px;
  border-radius: 20px;
  background-color: #f4f4f4;
  flex-direction: row;
  position: relative;
`;

export const OptionsButton = styled.TouchableOpacity`
  width: 109px;
  height: 37px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  position: absolute;
  background-color: ${({ active }) => (active ? '#0047B1' : 'transparent')};
`;

export const OptionsText = styled.Text`
  color: ${({ active }) => (active ? '#FFF' : '#B7B7B7')};
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
`;
