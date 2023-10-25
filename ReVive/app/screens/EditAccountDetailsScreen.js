import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import AppText from '../components/AppText';
import {useSelector, useDispatch} from 'react-redux';
import AppButton from '../components/AppButton';
import {nanoid} from '@reduxjs/toolkit';

import {
  fetchListings,
  selectAllListings,
  addListing,
} from '../redux/listingSlice';

function EditAccountDetailsScreen(props) {
  const dispatch = useDispatch();

  const listings = useSelector(selectAllListings);
  const listingStatus = useSelector(state => state.listings.status);
  const error = useSelector(state => state.listings.error);

  useEffect(() => {
    if (listingStatus === 'idle') {
      dispatch(fetchListings());
    }
  }, [listingStatus, dispatch]);
  if (listingStatus === 'loading') {
    console.log('loading');
  } else if (listingStatus === 'succeeded') {
    console.log('succeeded');
    console.log(listings);
  } else if (listingStatus === 'failed') {
    console.log('failed');
    console.log(error);
  }
  // console.log(listings);
  const handlePress = () => {
    dispatch(
      addListing({
        id: nanoid(),
        title: 'dfsds',
      }),
      console.log('added successfully'),
    );
  };
  return (
    <View style={styles.container}>
      <AppButton title="Press to add" onPress={handlePress} />
      <AppText>Still Under Construction</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default EditAccountDetailsScreen;
