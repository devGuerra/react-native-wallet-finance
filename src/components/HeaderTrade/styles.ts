import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 4px 20px 10px;

  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_150};
`;

export const ContainerText = styled.View`
  align-items: center;
`;

export const ButtonGoBack = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 32px;
`;
