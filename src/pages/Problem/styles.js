import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #fff;
  align-items: center;
`;

export const ContainerStatusBar = styled.KeyboardAvoidingView`
  background: #025bbf;
  width: 100%;
  height: 155px;
`;

export const Card = styled.View`
  margin-top: -50px;
  background: #fff;

  height: 40%;
  width: 90%;
  padding: 15px;
  border-radius: 4px;
  border: 2px solid #eee;
`;

export const InputText = styled.TextInput.attrs({
  numberOfLines: 4,
  multiline: true,
  autoCapitalize: 'sentences',
})`
  color: #999999;
  font-size: 18px;
  height: 100%;
`;

export const Button = styled.TouchableOpacity`
  margin-top: 20px;

  font-size: 18px;
  height: 50px;
  width: 90%;
  background: #025bbf;
  border-radius: 4px;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  /* height: 100%; */
  font-weight: bold;
  text-align: center;
`;
