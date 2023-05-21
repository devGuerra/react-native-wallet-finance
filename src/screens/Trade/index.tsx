import { useTheme } from "styled-components";
import { LineChart } from "react-native-svg-charts";
import { View } from "react-native";
import * as shape from "d3-shape";

import { HeaderTrade } from "@components/HeaderTrade";
import { Typography } from "@components/Typography";
import { ButtonRange } from "@components/ButtonRange";

import {
  PageContainer,
  Container,
  ContainerMain,
  ContainerRange,
  ContainerMiddle,
  Grid,
} from "./styles";

export const Trade = () => {
  const { COLORS } = useTheme();

  const stats = [
    {
      label: "Market Cap",
      value: "$430.88m",
    },
    {
      label: "Issue Date",
      value: "18/04/2022",
    },
    {
      label: "Vintage Range",
      value: "2019 – 2022",
    },
    {
      label: "TER",
      value: "0.15%",
    },
    {
      label: "Price at Close",
      value: "$17.68",
    },
    {
      label: "Price at Open",
      value: "$17.74",
    },
  ];

  return (
    <PageContainer>
      <HeaderTrade name="Wind Fund" tag="WFND" />
      <Container>
        <ContainerMain>
          <View>
            <Typography size="XL" weight="SEMIBOLD">
              $18.23
            </Typography>
            <Typography size="SM" weight="REGULAR" color="GREEN_300">
              3.51% ($1.21)
            </Typography>
          </View>
          <Typography size="XL" weight="SEMIBOLD">
            2022
          </Typography>
        </ContainerMain>
      </Container>
      <LineChart
        style={{ height: 153, width: "100%" }}
        data={[50, 10, 40, 95, 4, 24, 85, 91, 35, 53, 53, 24]}
        svg={{ stroke: COLORS.GREEN_300, strokeWidth: 2 }}
        curve={shape.curveLinear}
      ></LineChart>
      <Container>
        <ContainerRange>
          <ButtonRange active={false} title="1h" />
          <ButtonRange active title="1d" />
          <ButtonRange active={false} title="1w" />
          <ButtonRange active={false} title="1m" />
          <ButtonRange active={false} title="All" />
        </ContainerRange>

        <Typography size="LG" weight="SEMIBOLD">
          Info & Stats
        </Typography>

        <Grid>
          {stats.map((item, index) => (
            <ContainerMiddle key={index}>
              <Typography size="SM" weight="REGULAR" color="GRAY_300">
                {item.label}
              </Typography>
              <Typography size="SM" weight="REGULAR">
                {item.value}
              </Typography>
            </ContainerMiddle>
          ))}
        </Grid>

        <Typography size="LG" weight="SEMIBOLD">
          Fund Breakdown
        </Typography>
      </Container>
    </PageContainer>
  );
};
