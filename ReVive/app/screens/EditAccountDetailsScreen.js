import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "../components/AppText";

function EditAccountDetailsScreen(props) {
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

export default EditAccountDetailsScreen;
