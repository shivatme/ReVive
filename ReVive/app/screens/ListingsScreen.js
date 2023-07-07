import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import ActivityIndicator from "../components/ActivityIndicator";
import { getListings } from "../store/listings";
import { useIsFocused } from "@react-navigation/native";

const listings = getListings();

function ListingsScreen({ navigation }) {
  const loading = false;

  const isFocused = useIsFocused();

  return (
    <>
      <ActivityIndicator visible={loading} />

      <Screen style={styles.screen}>
        {isFocused && (
          <FlatList
            data={listings}
            keyExtractor={(listing) => listing.id.toString()}
            renderItem={({ item }) => (
              <Card
                item={item}
                title={item.title}
                subTitle={"$" + item.price}
                imageUrl={item.images[0].location}
                onPress={() =>
                  navigation.navigate(routes.LISTING_DETAILS, item)
                }
              />
            )}
          />
        )}
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
