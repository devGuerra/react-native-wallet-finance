import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.SM}px;
  padding: 20px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_150};
  min-width: 145px;
`;

export const ChartContainer = styled.View`
  margin: 14px 0;
`;

export const BottomContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;
