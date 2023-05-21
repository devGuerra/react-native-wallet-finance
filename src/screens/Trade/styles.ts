import styled from "styled-components/native";

export const PageContainer = styled.ScrollView.attrs({
  contentContainerStyle: {},
})`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Container = styled.View`
  padding: 20px;
  gap: 20px;
`;

export const ContainerMain = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ContainerRange = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
