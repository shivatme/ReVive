import React, { useRef } from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import MiniCard from "./MiniCard";
import { ScrollView } from "react-native";
import colors from "../config/colors";

function CategoryFilter({ categories }) {
  const scrollView = useRef();
  return (
    <View>
      <ScrollView
        horizontal
        ref={scrollView}
        bounces
        decelerationRate={0.95}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.container}>
          {categories.map((category, index) => (
            <View key={index}>
              <MiniCard
                item={category}
                color={colors.dark}
                style={[index === 0 && { marginLeft: 10 }]}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row" },
});

export default CategoryFilter;
