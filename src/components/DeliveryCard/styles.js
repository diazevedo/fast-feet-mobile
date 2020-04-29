import styled from 'styled-components/native';
import scale from '~/utils/functions/pxToPercentage';

export const Container = styled.View`
  margin-top: ${scale(20)};
  position: relative;
  border-radius: 4px;
  border: 2px solid #eee;
`;

export const DeliveryHeader = styled.View`
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  padding: ${scale(10)} ${scale(15)} ${scale(10)};
`;

export const DeliveryText = styled.Text`
  margin-left: ${scale(10)};
  font-size: ${scale(16)};
  color: #025bbf;
  font-weight: bold;
`;

export const Progress = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: ${scale(10)} ${scale(30)} ${scale(45)};
  padding: ${scale(10)};
`;

export const Line = styled.View`
  width: 100%;
  height: 2px;
  background: #025bbf;
  position: absolute;
  top: ${scale(5)};
  left: ${scale(10)};
`;

export const Status = styled.View`
  align-items: center;
`;

export const Point = styled.View`
  width: ${scale(10.5)};
  height: ${scale(10.5)};
  border: 1px solid #025bbf;
  border-radius: 5px;
  margin-top: -9px;
  background: ${(props) => (props.pointed === 1 ? '#025bbf' : '#FFF')};
`;

export const StatusItem = styled.Text`
  position: absolute;
  text-align: center;
  width: ${scale(70)};
  margin-top: ${scale(5)};
  font-size: ${scale(13)};
  color: #999;
`;

export const Infos = styled.View`
  flex-direction: row;
  background: #f8f9fd;
  justify-content: space-between;
  align-items: flex-end;
  padding: ${scale(14)};
`;

export const InfoTitle = styled.Text`
  color: #999999;
  font-size: ${scale(14)};
`;

export const InfoItem = styled.View``;

export const InfoText = styled.Text`
  color: #444444;
  font-size: ${scale(14)};
  font-weight: bold;
  margin-top: ${scale(5)};
`;

export const Button = styled.TouchableOpacity``;

export const ButtonText = styled.Text`
  color: #025bbf;
  font-size: ${scale(14)};
  font-weight: bold;
`;
