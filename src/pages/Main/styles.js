import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;

  background: #050533;
`;

export const Image = styled.Image``;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999999',
})`
  margin-top: 40px;
  width: 325px;
  height: 45px;
  background: #fff;
  padding-left: 20px;
  border-radius: 4px;
  color: #000;
`;

export const Button = styled(RectButton)`
  margin-top: 20px;
  height: 46px;
  width: 325px;
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
