import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Image,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface CardProps {
  item: {id: string | number};
  title: string;
  subTitle: string;
  onPress?: (event: GestureResponderEvent) => void;
  imageUrl: string;
}

function Card({item, title, subTitle, onPress, imageUrl}: CardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

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
