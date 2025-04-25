import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "../components/AppText";

function MyListingsScreen(props) {
  return (
    <View style={styles.container}>
      <AppText>Still Under Construction</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});

export default MyListingsScreen;
