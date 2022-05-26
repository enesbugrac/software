import React, { Component, useEffect } from "react";
import MainApp from "./src/Main";
import Toast from "react-native-toast-message";

import { firebaseConfig } from "./src/utilities/Consants/apiKey";
import firebase from "firebase/app";
import LoginMain from "./src/LoginMain";

export default function App() {
  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    } else {
      firebase.app(); // if already initialized, use that one
    }
  }, []);

  return (
    <>
      {false ? <MainApp /> : <LoginMain />}
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </>
  );
}
