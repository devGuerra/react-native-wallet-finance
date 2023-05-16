import styled from "styled-components/native";
import { TextInput } from "react-native";

export const Container = styled.View``;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  margin-bottom: 8px;
`;

export const Box = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.XS}px;

  padding: 16px 10px;
`;

export const StyledInput = styled(TextInput)`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.BLACK};

  flex: 1;
`;
