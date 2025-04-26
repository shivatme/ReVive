import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import AccountScreen from '../screens/AccountsScreen';
import EditAccountDetailsScreen from '../screens/EditAccountDetailsScreen';
import MessagesScreen from '../screens/MessagesScreen';
import MyListingsScreen from '../screens/MyListingsScreen';

type AccountStackParamList = {
  Account: undefined;
  EditAccountDetails: undefined;
  Messages: undefined;
  MyListings: undefined;
};

const Stack = createStackNavigator<AccountStackParamList>();

const AccountNavigator: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Account"
      component={AccountScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="EditAccountDetails"
      component={EditAccountDetailsScreen}
    />
    <Stack.Screen name="Messages" component={MessagesScreen} />
    <Stack.Screen name="MyListings" component={MyListingsScreen} />
  </Stack.Navigator>
);

export default AccountNavigator;
