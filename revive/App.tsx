import React from "react";
import { StatusBar, Text } from "react-native";
import AppNavigator from "./src/navigation/AppNavigator";
import { NavigationContainer } from "@react-navigation/native";

function App(): React.JSX.Element {
  return (
    <>
      <StatusBar backgroundColor={"#000000"} barStyle={"light-content"} />
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </>
  );
}

export default App;
