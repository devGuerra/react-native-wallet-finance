import { Routes } from "@routes/index";
import THEME from "@theme/default";
import { ThemeProvider } from "styled-components";

export default function App() {
  return (
    <ThemeProvider theme={THEME}>
      <Routes />
    </ThemeProvider>
  );
}
