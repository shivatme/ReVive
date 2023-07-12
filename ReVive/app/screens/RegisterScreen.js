import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from "../components/forms";

import useAuth from "../auth/useAuth";
import ActivityIndicator from "../components/ActivityIndicator";
import { View } from "react-native";
import colors from "../config/colors";
import authManager from "../firebase/auth.js";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {
  const { logIn } = useAuth();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const handlesubmit = async ({ name, email, password }) => {
    // setLoading(true);
    // const user = {
    //   id: 3,
    //   name,
    //   email,
    //   password,
    // };
    // logIn(user);
    // setTimeout(() => {
    //   setLoading(false);
    // }, 3000);
    console.log(name);
    authManager
      .register(email, password, name)
      .then((user) => {
        console.log("Registration successful");
        logIn(user);
      })
      .catch((err) => {
        console.log("Registration failed", err);
        setError(err);
      });
  };
  return (
    <>
      <ActivityIndicator visible={loading} />
      <Screen style={styles.screen}>
        <View style={styles.container}>
          <AppForm
            initialValues={{ name: "", email: "", password: "" }}
            onSubmit={handlesubmit}
            validationSchema={validationSchema}
          >
            <ErrorMessage error={error} visible={error} />
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="account"
              name="name"
              placeholder="Name"
              textContentType="name"
            />
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              name="email"
              placeholder="Email"
              textContentType="emailAddress"
            />

            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              name="password"
              placeholder="Password"
              secureTextEntry
              textContentType="password"
            />

            <SubmitButton title="Register" />
          </AppForm>
        </View>
      </Screen>
    </>
  );
}
const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.green,
  },
  container: {
    top: 100,
    padding: 10,
  },
});
export default RegisterScreen;
