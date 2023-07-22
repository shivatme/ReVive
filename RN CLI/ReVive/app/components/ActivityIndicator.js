import React from "react";
import LottieView from "lottie-react-native";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import colors from "../config/colors";

function ActivityIndicator({ visible = false }) {
  if (!visible) return null;
  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        loop
        source={require("../assets/animations/loader.json")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    zIndex: 1,
    opacity: 0.8,
    backgroundColor: colors.white,
  },
});
export default ActivityIndicator;
