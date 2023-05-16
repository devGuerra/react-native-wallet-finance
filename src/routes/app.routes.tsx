import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Currency } from "@screens/Currency";
import { Home } from "@screens/Home";
import { Portfolio } from "@screens/Portfolio";
import { SignIn } from "@screens/SignIn";
import { SignUp } from "@screens/SignUp";

const { Navigator, Screen } = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export function HomeRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Currency" component={Currency} />
      <Tab.Screen name="Portfolio" component={Portfolio} />
    </Tab.Navigator>
  );
}

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="SignIn"
    >
      <Screen name="HomeTabs" component={HomeRoutes} />
      <Screen
        name="SignIn"
        component={SignIn}
        options={{ headerTitle: "", headerShown: true }}
      />
      <Screen
        name="SignUp"
        component={SignUp}
        options={{ headerTitle: "", headerShown: true }}
      />
    </Navigator>
  );
}
