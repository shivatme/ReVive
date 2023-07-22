import React, {useState} from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import AppText from '../components/AppText';
import colors from '../config/colors';
import ListItem from '../components/lists/ListItem';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ImageSlider from '../components/ImageSlider';

function ListingDetailsScreen({route}) {
  const listing = route.params;
  const [isFavorite, setIsFavorite] = useState(listing.favourite);
  listing.favourite = isFavorite;
  const handleFavoritePress = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <>
      <View>
        <ImageSlider style={styles.image} images={listing.images} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{listing.title}</AppText>
          <AppText style={styles.price}>${listing.price}</AppText>
          <TouchableOpacity
            style={styles.favoriteButton}
            onPress={handleFavoritePress}>
            <MaterialCommunityIcons
              name={isFavorite ? 'heart' : 'heart-outline'}
              size={28}
              color={isFavorite ? colors.secondary : colors.medium}
            />
          </TouchableOpacity>
          <View style={styles.userContainer}>
            <ListItem
              image={require('../assets/users/John.jpg')}
              title="John"
              subTitle="John@domain.com"
            />
          </View>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
