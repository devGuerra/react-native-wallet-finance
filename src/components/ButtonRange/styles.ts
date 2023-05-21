import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";

interface Container extends TouchableOpacityProps {
  active: boolean;
}
export const Container = styled(TouchableOpacity)<Container>`
  background-color: ${({ theme, active }) =>
    active ? theme.COLORS.PURPLE_100 : theme.COLORS.WHITE};
  height: 36px;
  width: 36px;
  justify-content: center;
  align-items: center;

  border-radius: ${({ theme }) => theme.BORDER_RADIUS.XS}px;
`;
