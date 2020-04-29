import styled from 'styled-components/native';
import scale from '~/utils/functions/pxToPercentage';

export const Wrapper = styled.View`
  justify-content: center;
  padding: ${scale(30)};
`;

export const Image = styled.Image`
  align-self: center;
  width: ${scale(140)};
  height: ${scale(140)};
  border-radius: 100px;
  margin: ${scale(50)} 0;
`;

export const ViewImage = styled.View`
  align-self: center;
  width: ${scale(140)};
  height: ${scale(140)};
  border-radius: 100px;
  background: #c1deff;
  justify-content: center;
  align-items: center;
  margin: ${scale(50)} 0;
`;

export const TextProfile = styled.Text`
  font-size: ${scale(60)};
  color: #025bbf;
`;

export const ViewColumn = styled.View`
  padding: ${scale(10)} 0;
`;

export const Label = styled.Text`
  font-size: ${scale(16)};
  color: #666666;
  margin-bottom: ${scale(5)};
`;

export const UserInfo = styled.Text`
  font-size: ${scale(24)};
  color: #444444;
  font-weight: bold;
`;

export const ButtonLogout = styled.TouchableOpacity`
  width: 100%;
  height: ${scale(50)};
  background: #e74040;
  justify-content: center;
  border-radius: 4px;
  margin-top: ${scale(30)};
`;

export const ButtonText = styled.Text`
  color: #fff;
  text-align: center;
  font-size: ${scale(20)};
  font-weight: bold;
`;
