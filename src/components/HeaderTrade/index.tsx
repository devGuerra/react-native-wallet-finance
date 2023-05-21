import React from "react";

import { ButtonIcon, Container, ContainerText } from "./styles";
import { ArrowLeft } from "phosphor-react-native";
import { Typography } from "@components/Typography";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";

interface HeaderTradeProps {
  name: string;
  tag: string;
}

export const HeaderTrade: React.FC<HeaderTradeProps> = ({ name, tag }) => {
  const { COLORS } = useTheme();
  const { goBack } = useNavigation();

  return (
    <Container>
      <ButtonIcon onPress={goBack}>
        <ArrowLeft size={24} weight="bold" color={COLORS.BLACK} />
      </ButtonIcon>
      <ContainerText>
        <Typography size="LG" weight="SEMIBOLD">
          {name}
        </Typography>
        <Typography size="SM" color="GRAY_400">
          {tag}
        </Typography>
      </ContainerText>

      <ButtonIcon />
    </Container>
  );
};
