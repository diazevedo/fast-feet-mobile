import styled from 'styled-components/native';

export const SafeAreaView = styled.SafeAreaView`
  background: #fff;
  flex: 1;
`;

export const Container = styled.View`
  padding: 15px 20px 150px;
  background: #fff;
`;

export const Header = styled.View`
  width: 350px;
  height: 80px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Image = styled.Image`
  width: 60px;
  height: 70px;
  border-radius: 35px;
`;

export const ViewRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ViewColumn = styled.View`
  margin-left: 15px;
  flex: 1;
`;

export const WelcomeText = styled.Text`
  font-size: 12px;
  color: #666666;
`;

export const NameText = styled.Text`
  font-size: 22px;
  color: #444444;
  font-weight: bold;
`;

export const HeaderList = styled(ViewRow)`
  margin-top: 25px;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity``;

export const ButtonFilter = styled.TouchableOpacity`
  border-bottom-color: #025bbf;
  border-bottom-width: 1px;
  margin-left: 20px;
`;

export const TextFilter = styled.Text`
  color: #025bbf;
  font-size: 14px;
  font-weight: bold;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;
