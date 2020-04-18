import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 20px;
  position: relative;
  border-radius: 4px;
  border: 2px solid #eee;
`;

export const DeliverHeader = styled.View`
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  padding: 10px 15px 10px;
`;

export const DeliverText = styled.Text`
  margin-left: 20px;
  font-size: 14px;
  color: #025bbf;
  font-weight: bold;
`;

export const Progress = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px 30px 45px;
  padding: 10px;
`;

export const Line = styled.View`
  width: 100%;
  height: 2px;
  background: #025bbf;
  position: absolute;
  top: 14px;
  left: 10px;
`;

export const Status = styled.View`
  align-items: center;
`;

export const Point = styled.View`
  width: 10px;
  height: 10px;
  border: 1px solid #025bbf;
  border-radius: 5px;
  background: ${(props) => (props.pointed === 1 ? '#025bbf' : '#FFF')};
`;

export const StatusItem = styled.Text`
  position: absolute;
  text-align: center;
  width: 70px;
  margin-top: 15px;
  font-size: 12px;
  left: -30px;
  color: #999;
`;

export const Infos = styled.View`
  flex-direction: row;
  background: #f8f9fd;
  justify-content: space-between;
  align-items: flex-end;
  padding: 15px;
`;

export const InfoTitle = styled.Text`
  color: #999999;
  font-size: 10px;
`;
export const InfoItem = styled.View``;

export const InfoText = styled.Text`
  color: #444444;
  font-size: 14px;
  font-weight: bold;
  margin-top: 5px;
`;

export const Button = styled.TouchableOpacity``;

export const ButtonText = styled.Text`
  color: #025bbf;
  font-weight: bold;
`;
