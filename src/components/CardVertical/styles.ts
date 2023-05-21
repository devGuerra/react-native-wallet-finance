import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  padding: 20px 12px;

  height: 215px;

  border-radius: ${({ theme }) => theme.BORDER_RADIUS.SM}px;
`;
