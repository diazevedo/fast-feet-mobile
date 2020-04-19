import styled from 'styled-components/native';

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

export const ProblemHeader = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  margin-top: -60px;
`;

export const List = styled.FlatList`
  width: 90%;
`;

export const Card = styled.View`
  margin-top: 10px;
  background: #fff;
  width: 100%;
  height: auto;
  padding: 15px;
  border-radius: 4px;
  border: 2px solid #eee;
  flex-direction: row;
  justify-content: space-between;
`;

export const Description = styled.Text`
  width: 60%;
  flex: 1;
  height: auto;
  font-size: 16px;
  color: #999999;
`;

export const Date = styled.Text`
  color: #c1c1c1;
  font-size: 14px;
`;

export const NothingHere = styled.View`
  align-items: center;
  width: 100%;
  margin-top: 150px;
  padding: 15px;
  border-radius: 4px;
`;

export const TextNothing = styled.Text`
  font-size: 24px;
  color: #444444;
  font-weight: bold;
`;
