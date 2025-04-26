import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// import ListingDetailsScreen from '../screens/ListingDetailsScreen';
import ListingsScreen from '../screens/ListingsScreen';

// Define the types for the navigation stack
export type FeedStackParamList = {
  Listings: undefined;
  ListingDetails: undefined;
};

const Stack = createStackNavigator<FeedStackParamList>();

const FeedNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Listings" component={ListingsScreen} />
    {/* <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} /> */}
  </Stack.Navigator>
);

export default FeedNavigator;
