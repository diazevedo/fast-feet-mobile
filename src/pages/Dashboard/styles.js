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
  width: 100%;
  height: 80px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 5px;
`;

export const ViewImage = styled.View`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background: #c1deff;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
`;

export const TextProfile = styled.Text`
  font-size: 30px;
  color: #025bbf;
`;

export const Image = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 35px;
`;

export const ViewRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ViewColumn = styled.View`
  margin-left: 5px;
  flex: 1;
`;

export const WelcomeText = styled.Text`
  font-size: 14px;
  color: #666666;
`;

export const NameText = styled.Text`
  font-size: 24px;
  color: #444444;
  font-weight: bold;
`;

export const HeaderList = styled(ViewRow)`
  margin-top: 25px;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity``;

export const ButtonFilter = styled.TouchableOpacity`
  border-bottom-color: ${(props) =>
    props.selected ? '#025bbf' : 'transparent'};
  border-bottom-width: 1px;
  margin-left: 20px;
`;

export const TextFilter = styled.Text`
  color: ${(props) => (props.selected ? '#025bbf' : '#999999')};
  font-size: 14px;
  font-weight: bold;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const NothingHere = styled.View`
  align-items: center;
  width: 100%;
  margin-top: 150px;
  padding: 15px;
  border-radius: 4px;
`;
