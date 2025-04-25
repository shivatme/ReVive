import React, {useEffect, useRef} from 'react';
import {
  createBottomTabNavigator,
  useBottomTabBarHeight,
} from '@react-navigation/bottom-tabs';
import {StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AccountNavigator from './AccountNavigator';
import FeedNavigator from './FeedNavigator';
import ListingEditScreen from '../screens/ListingEditScreen';
import NewListingButton from './NewListingButton';
import routes from './routes';
import MessagesScreen from '../screens/MessagesScreen';
import FavouritesScreen from '../screens/FavouritesScreen';
import colors from '../config/colors';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  // const tabBarAnimationConfig = useRef({
  //   show: {
  //     from: {translateY: tabBarHeight},
  //     to: {translateY: 0},
  //   },
  //   hide: {
  //     from: {translateY: 0},
  //     to: {translateY: tabBarHeight},
  //   },
  // }).current;
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: styles.tabBarContainer,
        labelStyle: {top: -4},
        keyboardHidesTabBar: true,
      }}
      backBehavior="history">
      <Tab.Screen
        name="Home"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Chats"
        component={MessagesScreen}
        options={{
          tabBarBadge: 2,
          tabBarIcon: ({color, size}) => (
            <Ionicons name="chatbubble-sharp" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ListingEdit"
        component={ListingEditScreen}
        options={({navigation}) => ({
          tabBarButton: () => (
            <NewListingButton
              onPress={() => navigation.navigate(routes.LISTING_EDIT)}
            />
          ),
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="plus-circle"
              color={color}
              size={size}
            />
          ),
        })}
      />
      <Tab.Screen
        name="My Ads"
        component={FavouritesScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="heart-sharp" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigator}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
function showTabBar(route) {
  console.log(route);
  const routeName = getFocusedRouteNameFromRoute(route);
  console.log(routeName);

  // List of route names that belong to the stack navigator
  const stackRoutes = ['Home', 'Chats', 'ListingEdit', 'My Ads'];

  // Check if the current route belongs to the stack navigator
  if (stackRoutes.includes(routeName)) {
    return {display: 'flex'}; // Show the tab bar for stack navigator screens
  } else {
    return {display: 'none'}; // Hide the tab bar for other screens (e.g., Account)
  }
}

const styles = StyleSheet.create({
  tabBarContainer: {
    position: 'absolute',
    // borderWidth: 3,
    margin: 15,
    borderRadius: 25,
    backgroundColor: colors.white,
    elevation: 5,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: {width: 0, height: 2},
  },
});

export default AppNavigator;
