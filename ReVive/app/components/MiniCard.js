import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./AppText";
import colors from "../config/colors";

function MiniCard({ item, color = "black", style }) {
  return (
    <TouchableOpacity>
      <View style={[styles.card, style]}>
        <View style={styles.icon}>
          <MaterialCommunityIcons name={item.icon} size={40} color={color} />
        </View>
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{item.label}</AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: colors.white,
    marginRight: 10,
    marginBottom: 20,
    elevation: 5,
    width: 95,
    height: 70,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  detailsContainer: {},
  icon: {},
  title: { fontWeight: "100", fontSize: 11, textTransform: "uppercase" },
});
export default MiniCard;
