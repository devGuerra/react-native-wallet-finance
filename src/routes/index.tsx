import { NavigationContainer } from "@react-navigation/native";

import { AppRoutes } from "./app.routes";
import { SafeArea } from "@theme/global";

export function Routes() {
  return (
    <SafeArea>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </SafeArea>
  );
}
