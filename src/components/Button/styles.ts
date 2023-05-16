import styled from "styled-components/native";

import { TouchableOpacity } from "react-native";

export const Container = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.COLORS.PURPLE_700};
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.SM}px;
  padding: 16px 0;
  align-items: center;
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
