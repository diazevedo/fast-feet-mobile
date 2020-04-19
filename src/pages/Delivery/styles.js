import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background: #fff;
`;

export const Wrapper = styled.View`
  align-items: center;
  margin-bottom: 10px;
`;

export const ContainerStatusBar = styled.View`
  background: #025bbf;
  width: 100%;
  height: 155px;
`;

export const Card = styled.View`
  margin-top: -50px;
  background: #fff;
  width: 90%;
  padding: 15px;
  border-radius: 4px;
  border: 2px solid #eee;
`;

export const DeliveryHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const DeliveryText = styled.Text`
  margin-left: 10px;
  font-size: 18px;
  color: #025bbf;
  font-weight: bold;
`;

export const InfoTitle = styled.Text`
  color: #999999;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  margin: 10px 0;
`;

export const InfoText = styled.Text`
  font-size: 15px;
  font-weight: normal;
  color: #666666;
  margin-bottom: ${(props) => (props.isLast ? '0px' : '15px')};
  text-transform: capitalize;
`;

export const StatusCard = styled(Card)`
  margin-top: 10px;
`;

export const ViewRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ViewColumn = styled.View``;

export const Action = styled.View`
  width: 90%;
  margin-top: 10px;
  flex-direction: row;
  border-radius: 4px;
  background: #dae8f7;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const ButtonWrapper = styled.View`
  border-right-color: ${(props) =>
    props.isFirstColum === 1 ? '#fff' : 'transparent'};
  border-right-width: ${(props) => (props.isFirstColum === 1 ? '1px' : '0px')};

  border-bottom-color: ${(props) =>
    props.isLast === 1 ? 'transparent' : '#fff'};
  border-bottom-width: ${(props) => (props.isLast === 1 ? '0px' : '1px')};
  width: 50%;
  height: 50%;
  padding: 10px 15px;
`;

export const ButtonAction = styled.TouchableOpacity`
  align-items: center;

  justify-content: flex-start;
`;

export const ButtonText = styled.Text`
  font-size: 14px;
  font-weight: normal;
  text-align: center;
  color: #999;
  width: 50%;
`;
