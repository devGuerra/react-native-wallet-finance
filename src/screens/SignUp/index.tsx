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

export const SignUp = () => {
  const navigation = useNavigation();

  function handleSignIn() {
    navigation.goBack();
  }

  return (
    <Container>
      <Title>Create your account</Title>
      <BoxInput>
        <Input name="First Name" placeholder="Your name" />
        <Input name="Last Name" placeholder="Your last name" />
        <Input
          name="Email"
          placeholder="Your email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Input
          name="Password"
          placeholder="Minimum 8 characters"
          keyboardType="visible-password"
          autoCapitalize="none"
          secureTextEntry
        />
      </BoxInput>
      <Button>Create account</Button>
      <SignUpButton onPress={handleSignIn}>
        <SignUpText>
          Already have an account? <Underline> Log in Here</Underline>
        </SignUpText>
      </SignUpButton>
    </Container>
  );
};
