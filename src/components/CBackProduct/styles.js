import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  /* height: 260px; */
  border-radius: 20px;
  background-color: #fff;
  margin-top: 21px;
  padding-bottom: 20px;
  position: relative;
`;

export const Picture = styled.Image`
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
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

export const CBack = styled.View`
  width: 139px;
  height: 49px;
  border-radius: 10px;
  background-color: #f03f39;
  padding-left: 12px;
  padding-top: 5px;
  padding-bottom: 5px;
  justify-content: center;
`;

export const CBackPrice = styled.Text`
  font-size: 22px;
  line-height: 22px;
  color: #fff;
  font-weight: bold;
`;

export const CBackTimeLeft = styled.Text`
  font-size: 10px;
  line-height: 11px;
  color: #b9d0ff;
`;

export const CBackBoldTimeLeft = styled.Text`
  font-size: 10px;
  color: #ffdc4b;
  font-weight: bold;
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
