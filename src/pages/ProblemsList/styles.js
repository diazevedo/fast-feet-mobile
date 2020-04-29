import styled from 'styled-components/native';
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

export const ProblemHeader = styled.Text`
  color: #fff;
  font-size: ${scale(20)};
  font-weight: bold;
  margin-top: ${scale(-55)};
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  width: 90%;
`;

export const Card = styled.View`
  margin-top: ${scale(10)};
  background: #fff;
  width: 100%;
  height: auto;
  padding: ${scale(15)};
  border-radius: 4px;
  border: 2px solid #eee;
  flex-direction: row;
  justify-content: space-between;
`;

export const Description = styled.Text`
  width: 60%;
  flex: 1;
  height: auto;
  font-size: ${scale(16)};
  color: #999999;
`;

export const Date = styled.Text`
  color: #c1c1c1;
  font-size: ${scale(14)};
`;

export const NothingHere = styled.View`
  align-items: center;
  width: 100%;
  margin-top: ${scale(150)};
  padding: ${scale(15)};
  border-radius: 4px;
`;

export const TextNothing = styled.Text`
  font-size: ${scale(24)};
  color: #444444;
  font-weight: bold;
`;
