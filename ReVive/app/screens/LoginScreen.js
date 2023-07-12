import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
  ErrorMessage,
  AppForm,
  AppFormField,
  SubmitButton,
} from "../components/forms";
import useAuth from "../auth/useAuth";
import colors from "../config/colors";
import { getUsers } from "../store/users";
import authManager from "../firebase/auth.js";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const users = getUsers();

function LoginScreen() {
  const { logIn } = useAuth();
  const [loginFailed, setLoginFailed] = useState(false);

  const handlesubmit = async ({ email, password }) => {
    authManager
      .login(email, password)
      .then((user) => {
        console.log("Login successful");
        logIn(user);
      })
      .catch((err) => {
        console.log("Login failed", err);
        setLoginFailed(true);
      });
  };

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <AppForm
          initialValues={{ email: "", password: "" }}
          onSubmit={handlesubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage
            error="Invalid email and/or password"
            visible={loginFailed}
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

          <SubmitButton title="Login" />
        </AppForm>
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.green,
  },
  container: {
    top: 150,
    padding: 10,
  },
});
export default LoginScreen;
