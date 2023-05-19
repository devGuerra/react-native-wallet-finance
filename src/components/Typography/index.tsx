import React from "react";

import { TextProps } from "react-native";

import { Text } from "./styles";

import THEME from "@theme/default";

interface TypographyProps extends TextProps {
  size?: keyof typeof THEME.FONT_SIZE;
  weight?: keyof typeof THEME.FONT_FAMILY;
  color?: keyof typeof THEME.COLORS;
}

export const Typography: React.FC<TypographyProps> = ({
  size = "XS",
  weight = "REGULAR",
  color = "BLACK",
  children,
}) => {
  return (
    <Text size={size} weight={weight} color={color}>
      {children}
    </Text>
  );
};
