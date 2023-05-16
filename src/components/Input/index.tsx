import React, { useState } from "react";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components";

import { Box, Container, Label, StyledInput } from "./styles";
import { ToggleVisibility } from "@components/ToggleVisibilty";

type InputProps = TextInputProps & {
  name: string;
};
export const Input = ({ name, secureTextEntry, ...rest }: InputProps) => {
  const { COLORS } = useTheme();

  const [showPassword, setShowPassword] = useState(!secureTextEntry);

  return (
    <Container>
      <Label>{name}</Label>
      <Box>
        <StyledInput
          placeholderTextColor={COLORS.GRAY_200}
          returnKeyType="done"
          returnKeyLabel="done"
          secureTextEntry={!showPassword}
          {...rest}
        />

        {!!secureTextEntry && (
          <ToggleVisibility
            visible={showPassword}
            toggleVisibility={() => setShowPassword(!showPassword)}
          />
        )}
      </Box>
    </Container>
  );
};
