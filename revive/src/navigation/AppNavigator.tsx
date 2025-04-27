import React from "react";
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from "@react-navigation/bottom-tabs";
import { StyleSheet, ViewStyle } from "react-native";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
// import AccountNavigator from './AccountNavigator';
import FeedNavigator from "./FeedNavigator";
// import ListingEditScreen from '../screens/ListingEditScreen';
// import NewListingButton from './NewListingButton';
// import routes from './routes';
// import MessagesScreen from '../screens/MessagesScreen';
// import FavouritesScreen from '../screens/FavouritesScreen';
import colors from "../config/colors";
import {
  getFocusedRouteNameFromRoute,
  RouteProp,
} from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import MessagesScreen from "../screens/MessagesScreen";
import FavouritesScreen from "../screens/FavouritesScreeb";
import AccountNavigator from "./AccountNavigator";
import ListingEditScreen from "../screens/ListingEditScreen";
import routes from "./routes";
import NewListingButton from "./NewListingsButton";

// Define your tab navigator type
type RootTabParamList = {
  Home: undefined;
  Chats: undefined;
  ListingEdit: undefined;
  "My Ads": undefined;
  Account: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBarContainer,
        tabBarLabelStyle: { top: -4 },
        tabBarHideOnKeyboard: true,
        headerShown: false,
      }}
      backBehavior="history"
    >
      <Tab.Screen
        name="Home"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Chats"
        component={MessagesScreen}
        options={{
          tabBarBadge: 2,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubble-sharp" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ListingEdit"
        component={ListingEditScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <NewListingButton
              onPress={() => navigation.navigate(routes.LISTING_EDIT)}
            />
          ),
          tabBarIcon: ({ color, size }) => (
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
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart-sharp" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    position: "absolute",
    margin: 15,
    borderRadius: 25,
    backgroundColor: colors.white,
    elevation: 5,
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
});

export default AppNavigator;
