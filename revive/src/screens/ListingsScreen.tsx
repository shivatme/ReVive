import { NavigationProp, useIsFocused } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import db from "../firebase/database";
import ActivityIndicator from "../components/ActivityIndicator";
import AppText from "../components/AppText";
import colors from "../config/colors";
import Screen from "../components/Screen";
import Card from "../components/Card";
import routes from "../navigation/routes";

interface ListingsScreenProps {
  navigation: NavigationProp<any>;
}
// Define the type of a single listing item
interface Listing {
  id: string;
  title: string;
  price: string;
  images: string[];
  favorite: boolean;
}

function ListingsScreen({
  navigation,
}: ListingsScreenProps): React.JSX.Element {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const isFocused = useIsFocused();

  async function getAllListings(): Promise<void> {
    setRefreshing(true);

    try {
      const listing = await db.getListings(); // assumed to be an object

      // If no listings are found, you can handle that scenario here
      if (!listing) {
        setRefreshing(false);
        console.log("No listings available");
        return;
      }

      const listingsArray: Listing[] = Object.keys(listing).map((key) => ({
        id: key,
        ...(listing[key] as Listing), // Type assertion for `listing[key]`
      }));

      setListings(listingsArray); // Assuming `setListings` is a setter for state
      console.log(listingsArray); // Log the listingsArray instead of `listings` which is state-dependent
    } catch (error) {
      console.error("Error fetching listings:", error);
    } finally {
      setRefreshing(false);
    }
  }

  useEffect(() => {
    getAllListings();
  }, []);

  return (
    <>
      <ActivityIndicator visible={refreshing} />
      <Screen style={styles.screen}>
        {isFocused && (
          <FlatList
            ListHeaderComponent={
              <>
                <AppText style={styles.sectionHeader}>
                  RECOMMENDED ITEMS
                </AppText>
              </>
            }
            refreshing={refreshing}
            onRefresh={() => setRefreshing(true)}
            data={listings}
            keyExtractor={(listing) => listing.id.toString()}
            renderItem={({ item }) => (
              <Card
                item={item}
                title={item.title}
                subTitle={"₹ " + item.price}
                imageUrl={item.images[0]}
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
  sectionHeader: {
    margin: 10,
    color: colors.dark,
    fontWeight: "bold",
  },
  screen: {
    backgroundColor: colors.lightgrey,
  },
});

export default ListingsScreen;
