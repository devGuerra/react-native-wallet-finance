import styled from "styled-components/native";
import { TextProps } from "react-native";
import THEME from "@theme/default";

interface Props extends TextProps {
  size: keyof typeof THEME.FONT_SIZE;
  weight: keyof typeof THEME.FONT_FAMILY;
  color: keyof typeof THEME.COLORS;
}

export const Text = styled.Text<Props>`
  font-family: ${({ theme, weight }) => theme.FONT_FAMILY[weight]};
  font-size: ${({ theme, size }) => theme.FONT_SIZE[size]}px;
  color: ${({ theme, color }) => theme.COLORS[color]};
`;
