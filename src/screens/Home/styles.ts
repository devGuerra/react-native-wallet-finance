import { FlatList } from "react-native";
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

export const PortfolioBalance = styled.View`
  margin-top: 16px;
`;

export const PortfolioBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const RewardsButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.PURPLE_100};
  flex-direction: row;
  align-items: center;
  gap: 4px;
  padding: 8px;
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.SM}px;
`;

export const Line = styled.View`
  height: 1px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  width: 100%;
`;

export const ListCards = styled(FlatList).attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingRight: 20,
    paddingLeft: 20,
    gap: 16,
  },
})`
  margin-top: 20px;
`;

export const BannerContainer = styled.TouchableOpacity`
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.SM}px;
  background-color: ${({ theme }) => theme.COLORS.PURPLE_700};

  flex-direction: row;
  padding: 12px;

  box-sizing: border-box;

  gap: 32px;
`;

export const BannerTextContainer = styled.View`
  gap: 10px;
  flex: 1;
`;

export const ContainerRow = styled.View`
  flex-direction: row;

  justify-content: space-between;

  gap: 20px;
`;
