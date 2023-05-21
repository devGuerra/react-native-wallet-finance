import React from "react";

import { Typography } from "@components/Typography";

import { Container } from "./styles";
import { TouchableOpacityProps } from "react-native";

interface CardVerticalProps extends TouchableOpacityProps {
  title: string;
}

export const CardVertical: React.FC<CardVerticalProps> = ({ title }) => {
  return (
    <Container>
      <Typography size="XS" weight="SEMIBOLD" color="BLACK">
        {title}
      </Typography>
    </Container>
  );
};
