import { PageContainer, Container } from "./styles";
import { useTheme } from "styled-components";
import { HeaderTrade } from "@components/HeaderTrade";

export const Trade = () => {
  const { COLORS } = useTheme();

  return (
    <PageContainer>
      <HeaderTrade />
      <Container></Container>
    </PageContainer>
  );
};
