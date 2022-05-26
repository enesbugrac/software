import React from "react";
import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import AppStatusBar from "../../utilities/AppStatusBar";
import { commonNavigation, isEmpty, showAlert } from "../../utilities/AppUtils";
import { useForm } from "../../customHooks/useForm";
import { globalStyles } from "../../styles/global";
import { styles } from "./style";
import { registerUser } from "../../actions/customer";

const Register = (props) => {
  const [values, handleChange] = useForm({
    firstName: "",
    lastName: "",
    phone: "",
    gender: "",
    dob: "",
    password: "",
    email: "",
    status: true,
  });
  const handleSubmit = (e) => {
    const object = {
      ...values,
    };
    if (isEmpty(object)) {
      showAlert("Kindly fill all the fields");
    } else {
      registerUser(object);
    }
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <AppStatusBar barStyle="light-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={globalStyles.heading}>Customers Information</Text>
          <TextInput
            placeholder="First name"
            style={globalStyles.input}
            onChangeText={(txt) => handleChange("firstName", txt)}
            value={values.firstName}
          />
          <TextInput
            placeholder="last Name"
            style={globalStyles.input}
            onChangeText={(txt) => handleChange("lastName", txt)}
            value={values.lastName}
          />
          <TextInput
            placeholder="phone"
            style={globalStyles.input}
            onChangeText={(txt) => handleChange("phone", txt)}
            value={values.phone}
          />
          <TextInput
            placeholder="Gender"
            style={globalStyles.input}
            onChangeText={(txt) => handleChange("gender", txt)}
            value={values.gender}
          />
          <TextInput
            placeholder="email"
            style={globalStyles.input}
            onChangeText={(txt) => handleChange("email", txt)}
            value={values.email}
          />
          <TextInput
            placeholder="password"
            style={globalStyles.input}
            onChangeText={(txt) => handleChange("password", txt)}
            value={values.password}
          />
          <TextInput
            placeholder="2022-05-26 example input"
            style={globalStyles.input}
            onChangeText={(txt) => handleChange("dob", txt)}
            value={values.dob}
          />
          <TouchableOpacity
            onPress={handleSubmit}
            style={globalStyles.appButtonContainer}
          >
            <Text style={globalStyles.appButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
Register.navigationOptions = commonNavigation("Register");

export default Register;
