import React from 'react';
import {FlatList, StyleSheet} from 'react-native';

import Card from '../components/Card';
import colors from '../config/colors';
import routes from '../navigation/routes';
import Screen from '../components/Screen';
import ActivityIndicator from '../components/ActivityIndicator';
import {filterListings} from '../store/listings';
import {useIsFocused} from '@react-navigation/native';
import {View} from 'react-native';
import AppText from '../components/AppText';
import {useSelector, useDispatch} from 'react-redux';
import {selectAllListings} from '../redux/listingSlice';

function FavouritesScreen({navigation}) {
  let loading = true;
  const allListings = useSelector(selectAllListings);

  const listings = allListings.filter(listing => listing.favorite === true);
  console.log(listings, 'found');
  loading = false;
  const isFocused = useIsFocused();

  return (
    <>
      <ActivityIndicator visible={loading} />
      {listings && (
        <>
          <Screen style={styles.screen}>
            {isFocused && (
              <>
                {!listings.length == 0 ? (
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
        </>
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
