import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import AccountScreen from '../screens/AccountScreen';
import EditAccountDetailsScreen from '../screens/EditAccountDetailsScreen';
import MessagesScreen from '../screens/MessagesScreen';
import MyListingsScreen from '../screens/MyListingsScreen';

const Stack = createStackNavigator();

const AccountNavigator = () => (
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
      options={{
        animationEnabled: true,
        animationTypeForReplace: 'push',
      }}
    />
    <Stack.Screen name="Messages" component={MessagesScreen} />
    <Stack.Screen name="MyListings" component={MyListingsScreen} />
  </Stack.Navigator>
);

export default AccountNavigator;
