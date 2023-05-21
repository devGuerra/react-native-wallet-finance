import { BottomContainer, ChartContainer, Container } from "./styles";
import { Wind } from "phosphor-react-native";
import { Typography } from "@components/Typography";

import { LineChart } from "react-native-svg-charts";
import * as shape from "d3-shape";

interface CardChartProps {
  data: number[];
  name: string;
  value: string;
  percentage: string;
}

export const CardChart: React.FC<CardChartProps> = ({
  data,
  name,
  value,
  percentage,
}) => {
  return (
    <Container>
      <Wind size={24} color="red" />
      <Typography size="XS" weight="SEMIBOLD">
        {name}
      </Typography>
      <ChartContainer>
        <LineChart
          style={{ height: 40, width: 80 }}
          data={data}
          svg={{ stroke: "rgb(134, 65, 244)", strokeWidth: 2 }}
          curve={shape.curveBasis}
        ></LineChart>
      </ChartContainer>
      <BottomContainer>
        <Typography size="SM" weight="REGULAR">
          {value}
        </Typography>
        <Typography size="SM" weight="REGULAR" color="GREEN_300">
          {percentage}
        </Typography>
      </BottomContainer>
    </Container>
  );
};
