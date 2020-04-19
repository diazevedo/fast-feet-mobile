import styled from 'styled-components/native';
import { RNCamera } from 'react-native-camera';

export const Container = styled.View`
  flex: 1;
  background: #fff;
  align-items: center;
`;

export const ContainerStatusBar = styled.View`
  background: #025bbf;
  width: 100%;
  height: 155px;
`;

export const Card = styled.View`
  margin-top: -50px;
  height: 70%;
  width: 90%;
  border-radius: 4px;
`;

export const ImageBackground = styled.ImageBackground`
  flex: 1;
`;

export const Camera = styled(RNCamera)``;

export const Button = styled.TouchableOpacity`
  margin-top: 20px;
  font-size: 18px;
  height: 50px;
  width: 90%;
  background: #025bbf;
  border-radius: 4px;
  justify-content: center;
`;

export const ButtonCapture = styled.TouchableOpacity`
  margin-top: -100px;
  font-size: 18px;
  height: 80px;
  width: 80px;
  background: rgba(000, 000, 000, 0.2);
  border-radius: 40px;
  align-self: center;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;
