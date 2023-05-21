import React from "react";

import { ButtonGoBack, Container, ContainerText } from "./styles";
import { ArrowLeft } from "phosphor-react-native";
import { Typography } from "@components/Typography";
import { useTheme } from "styled-components";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const HeaderTrade: React.FC = () => {
  const { COLORS } = useTheme();
  const { goBack } = useNavigation();

  return (
    <Container>
      <ButtonGoBack onPress={goBack}>
        <ArrowLeft size={24} weight="bold" color={COLORS.BLACK} />
      </ButtonGoBack>
      <ContainerText>
        <Typography size="LG" weight="SEMIBOLD">
          Wind Fund
        </Typography>
        <Typography size="SM" color="GRAY_400">
          WFND
        </Typography>
      </ContainerText>

      <View />
    </Container>
  );
};
