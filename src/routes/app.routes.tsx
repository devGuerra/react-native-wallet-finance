import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Currency } from "@screens/Currency";
import { Home } from "@screens/Home";
import { SignIn } from "@screens/SignIn";
import { SignUp } from "@screens/SignUp";

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{ tabBarButton: () => null }}
      />
      <Screen
        name="Currency"
        component={Currency}
        options={{ tabBarButton: () => null }}
      />
      <Screen
        name="SignIn"
        component={SignIn}
        options={{ tabBarButton: () => null }}
      />
      <Screen
        name="SignUp"
        component={SignUp}
        options={{ tabBarButton: () => null }}
      />
    </Navigator>
  );
}
