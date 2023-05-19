import React from "react";

import {
  BalanceContainer,
  Container,
  NotificationContainer,
  Title,
  UserContainer,
} from "./styles";
import { Bell, CaretDown, User } from "phosphor-react-native";
import { useTheme } from "styled-components";

export const HomeHeader: React.FC = () => {
  const { COLORS } = useTheme();

  return (
    <Container>
      <UserContainer>
        <User size={24} color={COLORS.BLACK} />
      </UserContainer>
      <BalanceContainer>
        <Title>Account: $1,457.23</Title>
        <CaretDown size={12} color={COLORS.BLACK} weight="bold" />
      </BalanceContainer>

      <NotificationContainer>
        <Bell size={24} color={COLORS.BLACK} />
      </NotificationContainer>
    </Container>
  );
};
