import React from 'react';
import {View, StyleSheet} from 'react-native';
import AppText from '../components/AppText';

// If the screen is part of a navigation stack, you can define the navigation type
import {StackNavigationProp} from '@react-navigation/stack';

interface MyListingsScreenProps {}

const MyListingsScreen: React.FC<MyListingsScreenProps> = ({}) => {
  return (
    <View style={styles.container}>
      <AppText>Still Under Construction</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default MyListingsScreen;
