import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('screen');

export const Container = styled.SafeAreaView`
  /* flex: 1;*/
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  background: #050533;
`;

export const ContentContainer = styled.View`
  width: 80%;
  align-items: center;
`;

export const Image = styled.Image``;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999999',
})`
  margin-top: 10%;
  width: 100%;
  height: 15%;
  background: #fff;
  padding-left: 7%;
  border-radius: 4px;
  color: #000;
`;

export const Button = styled(RectButton)`
  margin-top: 5%;
  width: 100%;
  height: 15%;
  background: #057dcd;
  border-radius: 4px;

  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
