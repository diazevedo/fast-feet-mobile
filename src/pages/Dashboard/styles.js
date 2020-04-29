import styled from 'styled-components/native';
import scale from '~/utils/functions/pxToPercentage';

export const SafeAreaView = styled.SafeAreaView`
  background: #fff;
  flex: 1;
`;

export const Container = styled.View`
  padding: 5% 5% 40%;
  background: #fff;
`;

export const Header = styled.View`
  width: 100%;
  height: ${scale(80)};
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: ${scale(5)};
`;

export const ViewImage = styled.View`
  width: ${scale(80)};
  height: ${scale(80)};
  border-radius: 100px;
  background: #c1deff;
  justify-content: center;
  align-items: center;
  margin: ${scale(50)} 0;
`;

export const TextProfile = styled.Text`
  font-size: ${scale(30)};
  color: #025bbf;
`;

export const Image = styled.Image`
  width: ${scale(70)};
  height: ${scale(70)};
  border-radius: ${scale(70)};
`;

export const ViewRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ViewColumn = styled.View`
  margin-left: ${scale(15)};
  flex: 1;
`;

export const WelcomeText = styled.Text`
  font-size: ${scale(14)};
  color: #666666;
`;

export const NameText = styled.Text`
  font-size: ${scale(24)};
  color: #444444;
  font-weight: bold;
`;

export const HeaderList = styled(ViewRow)`
  margin-top: ${scale(20)};
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity``;

export const ButtonFilter = styled.TouchableOpacity`
  border-bottom-color: ${(props) =>
    props.selected ? '#025bbf' : 'transparent'};
  border-bottom-width: 1px;
  margin-left: 5%;
`;

export const TextFilter = styled.Text`
  color: ${(props) => (props.selected ? '#025bbf' : '#999999')};
  font-size: ${scale(14)};
  font-weight: bold;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const NothingHere = styled.View`
  align-items: center;
  width: 100%;
  margin-top: ${scale(150)};
  padding: ${scale(14)};
  border-radius: 4px;
`;
