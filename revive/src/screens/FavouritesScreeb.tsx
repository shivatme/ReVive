import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import Card from '../components/Card';
import colors from '../config/colors';
import routes from '../navigation/routes';
import Screen from '../components/Screen';
import ActivityIndicator from '../components/ActivityIndicator';
import {useIsFocused} from '@react-navigation/native';
import AppText from '../components/AppText';
import db from '../db/db';

interface Listing {
  id: number;
  title: string;
  price: number;
  images: string[];
  favorite: boolean;
}

interface FavouritesScreenProps {
  navigation: any; // You can type this more precisely if needed
}

function FavouritesScreen({navigation}: FavouritesScreenProps) {
  let loading = true;
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [listingsa, setListingsa] = useState<Listing[]>([]);
  async function getAllListings(): Promise<void> {
    setRefreshing(true);
    const listing = await db.getListings(); // assumed to be an object as you shared before

    const listingsArray: Listing[] = Object.keys(listing).map(key => ({
      id: key,
      ...listing[key],
    }));

    setListingsa(listingsArray);
    setRefreshing(false);
    console.log(listings);
  }

  useEffect(() => {
    getAllListings();
  }, []);

  const listings = listingsa.filter(
    (listing: Listing) => listing.favorite === true,
  );
  console.log(listings, 'found');
  loading = false;
  const isFocused = useIsFocused();

  return (
    <>
      <ActivityIndicator visible={loading} />
      {listings && (
        <Screen style={styles.screen}>
          {isFocused && (
            <>
              {listings.length !== 0 ? (
                <FlatList
                  data={listings}
                  keyExtractor={listing => listing.id.toString()}
                  renderItem={({item}) => (
                    <Card
                      item={item}
                      title={item.title}
                      subTitle={'$' + item.price}
                      imageUrl={item.images[0]}
                      onPress={() =>
                        navigation.navigate(routes.LISTING_DETAILS, item)
                      }
                    />
                  )}
                />
              ) : (
                <View style={styles.emptyView}>
                  <AppText>No items favorited.</AppText>
                </View>
              )}
            </>
          )}
        </Screen>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
  emptyView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default FavouritesScreen;
