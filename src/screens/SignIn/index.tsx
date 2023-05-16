import { Input } from "@components/Input";
import {
  BoxInput,
  Container,
  SignUpButton,
  SignUpText,
  Title,
  Underline,
} from "./styles";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";

export const SignIn = () => {
  const navigation = useNavigation();

  function handleSignUp() {
    navigation.navigate("SignUp");
  }

  return (
    <Container>
      <Title>Login</Title>
      <BoxInput>
        <Input name="E-mail" placeholder="email@email.com" />
        <Input
          name="Password"
          placeholder="Minimum 8 characters"
          secureTextEntry
        />
      </BoxInput>
      <Button>Login</Button>
      <SignUpButton onPress={handleSignUp}>
        <SignUpText>
          Don’t have an account? <Underline>Sign up</Underline> here
        </SignUpText>
      </SignUpButton>
    </Container>
  );
};
