import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Trade } from "@screens/Trade";
import { Home } from "@screens/Home";
import { Portfolio } from "@screens/Portfolio";
import { SignIn } from "@screens/SignIn";
import { SignUp } from "@screens/SignUp";

import { useTheme } from "styled-components";
import { ArrowsLeftRight, ChartPieSlice, House } from "phosphor-react-native";

const { Navigator, Screen } = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export function HomeRoutes() {
  const { COLORS, FONT_FAMILY } = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.PURPLE_700,
        tabBarInactiveTintColor: COLORS.BLACK,
        tabBarStyle: {
          paddingTop: 14,
          paddingBottom: 24,
          height: 80,
        },
        tabBarLabelStyle: {
          fontFamily: FONT_FAMILY.REGULAR,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => ({
          tabBarIcon: ({ color }) => (
            <House size={24} color={color} weight="fill" />
          ),
          tabBarLabelStyle: {
            fontFamily: navigation.isFocused()
              ? FONT_FAMILY.SEMIBOLD
              : FONT_FAMILY.REGULAR,
          },
        })}
      />
      <Tab.Screen
        name="Trade"
        component={Trade}
        options={({ navigation }) => ({
          tabBarIcon: ({ color }) => (
            <ArrowsLeftRight size={24} color={color} weight="fill" />
          ),
          tabBarLabelStyle: {
            fontFamily: navigation.isFocused()
              ? FONT_FAMILY.SEMIBOLD
              : FONT_FAMILY.REGULAR,
          },
        })}
      />
      <Tab.Screen
        name="Portfolio"
        component={Portfolio}
        options={({ navigation }) => ({
          tabBarIcon: ({ color }) => (
            <ChartPieSlice size={24} color={color} weight="fill" />
          ),
          tabBarLabelStyle: {
            fontFamily: navigation.isFocused()
              ? FONT_FAMILY.SEMIBOLD
              : FONT_FAMILY.REGULAR,
          },
        })}
      />
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
