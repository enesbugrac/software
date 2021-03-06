import { REGISTER_USER, LOGIN_USER } from "./types";
import axios from "axios";
import Toast from "react-native-toast-message";
const API = "http://10.0.2.2:44377/api/v1";
export const registerUser = (data) => {
  axios
    .post(`http://10.0.2.2:44377/api/v1/Customer`, data)
    .then((res) => console.log("girdi"))
    .catch((err) => console.log(err));
  return {
    type: REGISTER_USER,
    payload: true,
  };
};

//CREATE
export const createCarList = (item, props) => async (dispatch) => {
  let carListRef = firebase.database().ref("rentCarsList");
  let newCarRef = carListRef.push();
  await newCarRef
    .set(item)
    .then(uploadImageAsync(item.image, item.name))
    .then((resp) => {
      setTimeout(() => {
        props.navigation.goBack();
        Toast.show({
          text1: "Congrats",
          text2: "Car added succesfully 👋",
        });
      }, 2000);
      dispatch({
        type: CREATE_A_CAR,
        payload: true,
      });
    })
    .catch((err) => {
      dispatch({
        type: CREATE_A_CAR,
        payload: false,
      });
    });
};

async function uploadImageAsync(uri, name) {
  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      resolve(xhr.response);
    };
    xhr.onerror = function (e) {
      reject(new TypeError("Network request failed"));
    };
    xhr.responseType = "blob";
    xhr.open("GET", uri, true);
    xhr.send(null);
  });

  const ref = firebase
    .storage()
    .ref()
    .child("uploads/" + name);
  const snapshot = await ref.put(blob);

  // We're done with the blob, close and release it
  blob.close();

  return await snapshot.ref.getDownloadURL();
}
