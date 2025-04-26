import {useIsFocused} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import db from '../db/db';
import ActivityIndicator from '../components/ActivityIndicator';

interface ListingsScreenProps {}

function ListingsScreen(props: ListingsScreenProps): React.JSX.Element {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const isFocused = useIsFocused();

  async function getListingsNw() {
    setRefreshing(true);
    const listings = await db.getListings();
    setRefreshing(false);
    console.log(listings);
  }

  useEffect(() => {
    getListingsNw();
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator visible={refreshing} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ListingsScreen;
