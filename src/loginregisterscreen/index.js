import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// import screen components
import LoginScreen from "./login/index";
import RegisterScreen from "./register/index";

const LoginStack = createStackNavigator({
  Login: LoginScreen,
});
const RegisterStack = createStackNavigator({
  Register: RegisterScreen,
});

const TabNavigator = createBottomTabNavigator({
  LoginScreen: {
    screen: LoginStack,
    navigationOptions: {
      tabBarLabel: "login",
      tabBarOptions: {
        activeTintColor: "#56CCF2",
        inactiveTintColor: "rgba(0, 0, 0, 0.38)",
      },
      tabBarIcon: ({ tintColor }) => (
        <MaterialCommunityIcons name="login" size={24} color={tintColor} />
      ),
    },
  },
  RegisterScreen: {
    screen: RegisterStack,
    navigationOptions: {
      tabBarLabel: "register",
      tabBarOptions: {
        activeTintColor: "#56CCF2",
        inactiveTintColor: "rgba(0, 0, 0, 0.38)",
      },
      tabBarIcon: ({ tintColor }) => (
        <MaterialCommunityIcons name="login" size={24} color={tintColor} />
      ),
    },
  },
});

export default createAppContainer(TabNavigator);
