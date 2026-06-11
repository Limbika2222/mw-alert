import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import MapScreen from "../screens/MapScreen";
import SOSScreen from "../screens/SOSScreen";
import MoreScreen from "../screens/MoreScreen";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
  screenOptions={({ route }) => ({
    headerShown: false,
    tabBarActiveTintColor: "#DC2626",
    tabBarInactiveTintColor: "#6B7280",

    tabBarIcon: ({ color, size }) => {
      let iconName:
        | "home"
        | "map"
        | "warning"
        | "menu";

      if (route.name === "Home") {
        iconName = "home";
      } else if (route.name === "Map") {
        iconName = "map";
      } else if (route.name === "SOS") {
        iconName = "warning";
      } else {
        iconName = "menu";
      }

      return (
        <Ionicons
          name={iconName}
          size={size}
          color={color}
        />
      );
    },
  })}
>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
        />

        <Tab.Screen
          name="Map"
          component={MapScreen}
        />

        <Tab.Screen
          name="SOS"
          component={SOSScreen}
        />

        <Tab.Screen
          name="More"
          component={MoreScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}