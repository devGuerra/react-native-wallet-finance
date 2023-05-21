import { FlatList } from "react-native";
import { Coin } from "phosphor-react-native";
import { useTheme } from "styled-components";

import { HomeHeader } from "@components/HomeHeader";
import { Typography } from "@components/Typography";
import { CardChart } from "@components/CardChart";
import BusinessImage from "@assets/bussiness.svg";

import {
  BannerContainer,
  BannerTextContainer,
  Container,
  Line,
  PageContainer,
  PortfolioBalance,
  PortfolioBox,
  RewardsButton,
} from "./styles";

type CardsType = (typeof cardsMock)[0];

const cardsMock = [
  {
    name: "Wind Fund",
    value: "$1032.23",
    percentage: "2.3%",
    data: [50, 10, 40, 95, 4, 24, 85, 91, 35, 53, 53, 24],
  },
  {
    name: "Solar Fund",
    value: "$986.61",
    percentage: "2.3%",
    data: [24, 85, 91, 35, 53, 53, 24, 50, 10, 40, 95, 4],
  },
  {
    name: "Natural Fund",
    value: "$1122.95",
    percentage: "2.3%",
    data: [7, 24, 85, 91, 35, 53, 53, 24, 50, 10, 40, 95],
  },
];

export const Home = () => {
  const { COLORS } = useTheme();

  return (
    <PageContainer>
      <Container>
        <HomeHeader />
        <PortfolioBalance>
          <Typography size="XS" weight="REGULAR">
            Portfolio
          </Typography>

          <PortfolioBox>
            <Typography size="XL" weight="SEMIBOLD">
              $1,245.23
            </Typography>

            <RewardsButton>
              <Coin size={24} color={COLORS.PURPLE_700} />
              <Typography size="XS" weight="SEMIBOLD" color="PURPLE_700">
                Earn Rewards
              </Typography>
            </RewardsButton>
          </PortfolioBox>
        </PortfolioBalance>
      </Container>
      <Line />
      <Container>
        <Typography size="LG" weight="SEMIBOLD">
          Funds
        </Typography>
      </Container>
      <FlatList<CardsType>
        data={cardsMock}
        keyExtractor={(item) => item.name}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
          gap: 20,
        }}
        renderItem={({ item }) => (
          <CardChart
            name={item.name}
            value={item.value}
            percentage={item.percentage}
            data={item.data}
          />
        )}
      />
      <Container>
        <BannerContainer>
          <BannerTextContainer>
            <Typography size="MD" weight="SEMIBOLD" color="WHITE">
              Learn more about carbon credits
            </Typography>
            <Typography size="SM" weight="REGULAR" color="WHITE">
              Check out our top tips!
            </Typography>
          </BannerTextContainer>
          <BusinessImage width={94} height={87} />
        </BannerContainer>
      </Container>
    </PageContainer>
  );
};
