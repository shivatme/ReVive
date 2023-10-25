import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector, useDispatch} from 'react-redux';
import {selectListingById} from '../redux/listingSlice';
import {updateListing} from '../redux/listingSlice';

function Card({item, title, subTitle, onPress, imageUrl}) {
  const dispatch = useDispatch();
  const listing = useSelector(state => selectListingById(state, item.id));

  const [isFavorite, setIsFavorite] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    if (listing && isInitialLoad) {
      setIsFavorite(listing.favorite);
      setIsInitialLoad(false);
    }
  }, [listing, isInitialLoad]);

  useEffect(() => {
    if (!isInitialLoad && listing) {
      const listingId = listing.id;
      dispatch(updateListing({id: listingId, favorite: isFavorite}));
    }
  }, [isFavorite, isInitialLoad, listing]);

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={{uri: imageUrl}} />
        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={() => setIsFavorite(!isFavorite)}>
          <MaterialCommunityIcons
            name={isFavorite ? 'heart' : 'heart-outline'}
            size={28}
            color={isFavorite ? colors.secondary : colors.medium}
          />
        </TouchableOpacity>
        <View style={styles.detailsContainer}>
          <AppText style={styles.title} numberOfLines={1}>
            {title}
          </AppText>
          <AppText style={styles.subTitle} numberOfLines={2}>
            {subTitle}
          </AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 10,
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 15,
    overflow: 'hidden',
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 200,
  },
  detailsContainer: {
    padding: 10,
  },
  title: {
    marginBottom: 3,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: 'bold',
  },
  favoriteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
});

export default Card;
