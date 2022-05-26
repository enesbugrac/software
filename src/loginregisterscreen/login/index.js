import React from "react";
import { Text, View } from "react-native";
import AppStatusBar from "../../utilities/AppStatusBar";
import { commonNavigation } from "../../utilities/AppUtils";

const Login = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <AppStatusBar barStyle="light-content" />
      <Text>Login</Text>
    </View>
  );
};
Login.navigationOptions = commonNavigation("Login");

export default Login;
