import { TouchableOpacityProps } from "react-native";

import { Container, Text } from "./styles";

interface ButtonProps extends TouchableOpacityProps {}

export const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <Container {...rest}>
      <Text>{children}</Text>
    </Container>
  );
};
