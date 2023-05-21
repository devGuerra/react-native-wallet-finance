import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const UserContainer = styled.TouchableOpacity`
  height: 32px;
  width: 32px;
  border-radius: 16px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  justify-content: center;
  align-items: center;
`;

export const BalanceContainer = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  gap: 4px;
`;

export const NotificationContainer = styled.TouchableOpacity`
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMIBOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`;
