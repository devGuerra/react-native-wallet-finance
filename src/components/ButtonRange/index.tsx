import React from "react";

import { Container } from "./styles";
import { Typography } from "@components/Typography";

interface ButtonRangeProps {
  active: boolean;
  title: string;
}

export const ButtonRange: React.FC<ButtonRangeProps> = ({ active, title }) => {
  return (
    <Container active={active}>
      <Typography
        size="SM"
        weight="MEDIUM"
        color={active ? "PURPLE_700" : "GRAY_300"}
      >
        {title}
      </Typography>
    </Container>
  );
};
