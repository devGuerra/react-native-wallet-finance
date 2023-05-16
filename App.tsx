import { ThemeProvider } from "styled-components";
import { ActivityIndicator, StatusBar } from "react-native";

import { Routes } from "@routes/index";
import THEME from "@theme/default";

import {
  useFonts,
  Sora_600SemiBold,
  Sora_500Medium,
  Sora_400Regular,
} from "@expo-google-fonts/sora";

export default function App() {
  const [fontsLoaded] = useFonts({
    Sora_600SemiBold,
    Sora_500Medium,
    Sora_400Regular,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <ThemeProvider theme={THEME}>
      <StatusBar barStyle={"dark-content"} />
      <Routes />
    </ThemeProvider>
  );
}
