import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  /* height: 260px; */
  border-radius: 10px;
  background-color: #fff;
  margin-top: 21px;
  padding-bottom: 18px;
  position: relative;
`;

export const Picture = styled.Image`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 103px;
  width: 100%;
  position: relative;
`;

export const FavoriteButton = styled.TouchableOpacity`
  width: 46px;
  height: 46px;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 999;
  top: 10px;
  right: 10px;
`;

export const ProductInfo = styled(Container)`
  padding: 16px 20px 0px;
  margin-top: 0;
`;

export const Title = styled.Text`
  color: #000;
  font-size: 16px;
  line-height: 20px;
  font-weight: bold;
  /* background-color: #f0f; */
`;

export const Description = styled.Text`
  color: #939393;
  font-size: 12px;
  margin-top: 4px;
  line-height: 20px;
  /* background-color: #06f; */
`;

export const CBackContainer = styled.View`
  width: 100%;
  height: 49px;
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
  justify-content: space-between;
`;

export const RatingContainer = styled.View`
  justify-content: space-between;
  height: 38px;
  width: 109px;
`;

export const RatingTitle = styled(Title)`
  font-size: 12px;
`;

export const StarsContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  height: 18px;
`;
