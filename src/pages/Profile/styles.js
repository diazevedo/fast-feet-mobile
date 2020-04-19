import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Wrapper = styled.View`
  /* align-items: center; */
  justify-content: center;
  padding: 30px;
  /* margin: 50px 0; */
`;
export const Image = styled.Image`
  align-self: center;
  width: 140px;
  height: 140px;
  border-radius: 70px;
  margin: 50px 0;
`;

export const ViewImage = styled.View`
  align-self: center;
  width: 140px;
  height: 140px;
  border-radius: 70px;
  background: #c1deff;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
`;

export const TextProfile = styled.Text`
  font-size: 60px;
  color: #025bbf;
`;

export const ViewColumn = styled.View`
  padding: 10px 0;
`;

export const Label = styled.Text`
  font-size: 16px;
  color: #666666;
  margin-bottom: 5px;
`;

export const UserInfo = styled.Text`
  font-size: 24px;
  color: #444444;
  font-weight: bold;
`;

export const ButtonLogout = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background: #e74040;
  justify-content: center;
  border-radius: 4px;
  margin-top: 30px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;
