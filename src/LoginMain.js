import React from "react";
import { Text, View } from "react-native";
import Screens from "./loginregisterscreen";
import store from "./store";
import { Provider } from "react-redux";

const LoginMain = () => {
  return (
    <Provider store={store}>
      <Screens />
    </Provider>
  );
};

export default LoginMain;
