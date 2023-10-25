import React, {useEffect, useState} from 'react';
import {FlatList, ScrollView, StyleSheet} from 'react-native';

import Card from '../components/Card';
import colors from '../config/colors';
import routes from '../navigation/routes';
import Screen from '../components/Screen';
import ActivityIndicator from '../components/ActivityIndicator';
import {useIsFocused} from '@react-navigation/native';
import AppText from '../components/AppText';
import {useSelector, useDispatch} from 'react-redux';
import {fetchListings, selectAllListings} from '../redux/listingSlice';

function ListingsScreen({navigation}) {
  const dispatch = useDispatch();

  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const isFocused = useIsFocused();

  const allListings = useSelector(selectAllListings);
  const listingStatus = useSelector(state => state.listings.status);
  const error = useSelector(state => state.listings.error);

  useEffect(() => {
    if (listingStatus === 'idle' || refreshing === true) {
      dispatch(fetchListings());
    }
    // if (listingStatus === 'loading') {
    //   console.log('loading');
    // } else
    if (listingStatus === 'succeeded') {
      console.log('succeeded');
      setRefreshing(false);
      setListings(allListings);
      setLoading(false);
    } else if (listingStatus === 'failed') {
      console.log('failed');
      console.log(error);
    }
  }, [listingStatus, dispatch, refreshing]);

  // const listingsArray = Object.entries(listings).map(
  //   ([listingId, listing]) => ({
  //     id: listingId,
  //     title: listing.title,
  //     price: listing.price,
  //     images: listing.images,
  //     category: listing.categoryId,
  //   }),
  // );
  return (
    <>
      <ActivityIndicator visible={loading} />

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
            keyExtractor={listing => listing.id.toString()}
            renderItem={({item}) => (
              <Card
                item={item}
                title={item.title}
                subTitle={'₹ ' + item.price}
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
    fontWeight: 'bold',
  },
  screen: {
    backgroundColor: colors.lightgrey,
  },
});

export default ListingsScreen;
