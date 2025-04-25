import React, { useState } from "react";
import { FlatList, Image, View, StyleSheet, Dimensions } from "react-native";
import colors from "../config/colors";

const { width } = Dimensions.get("window");

function ImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <View style={styles.container}>
      {images.length == 1 ? (
        <Image source={{ uri: images[0] }} style={styles.image} />
      ) : (
        <>
          <FlatList
            data={images}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            onScroll={(e) => {
              const x = e.nativeEvent.contentOffset.x;
              setCurrentIndex((x / width).toFixed(0));
            }}
            renderItem={({ item, index }) => {
              return (
                <View style={styles.imageContainer}>
                  <Image source={{ uri: item }} style={styles.image} />
                </View>
              );
            }}
          />
          <View style={styles.indicator}>
            {images.map((item, index) => {
              return (
                <View
                  key={index}
                  style={{
                    width: currentIndex == index ? 22 : 6,
                    height: currentIndex == index ? 8 : 6,
                    borderRadius: 6,
                    backgroundColor:
                      currentIndex == index ? colors.primary : "grey",
                    marginLeft: 5,
                  }}
                ></View>
              );
            })}
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 325,
  },
  imageContainer: {
    width,
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },
  indicator: {
    flexDirection: "row",
    width,
    justifyContent: "center",
    alignItems: "center",
  },
  // dot: {
  //   width: 8,
  //   height: 8,
  //   borderRadius: 4,
  //   backgroundColor: currentIndex == index ? "green" : "grey",
  //   marginLeft: 5,
  // },
});

export default ImageSlider;
