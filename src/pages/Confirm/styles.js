import styled from 'styled-components/native';
import { RNCamera } from 'react-native-camera';
import scale from '~/utils/functions/pxToPercentage';

export const Container = styled.View`
  flex: 1;
  background: #fff;
  align-items: center;
`;

export const ContainerStatusBar = styled.View`
  background: #025bbf;
  width: 100%;
  height: ${scale(155)};
`;

export const Card = styled.View`
  margin-top: ${scale(-55)};
  height: 70%;
  width: 90%;
  border-radius: 4px;
`;

export const ImageBackground = styled.ImageBackground`
  flex: 1;
`;

export const Camera = styled(RNCamera)``;

export const Button = styled.TouchableOpacity`
  margin-top: ${scale(30)};
  font-size: ${scale(18)};
  height: ${scale(50)};
  width: 90%;
  background: #025bbf;
  border-radius: 4px;
  justify-content: center;
`;

export const ButtonCapture = styled.TouchableOpacity`
  margin-top: ${scale(-100)};
  font-size: ${scale(18)};
  height: ${scale(80)};
  width: ${scale(80)};
  background: rgba(000, 000, 000, 0.2);
  border-radius: 100px;
  align-self: center;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: ${scale(18)};
  font-weight: bold;
  text-align: center;
`;
