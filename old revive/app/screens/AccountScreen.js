import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';

import colors from '../config/colors';
import Icon from '../components/Icon';
import ListItem from '../components/lists/ListItem';
import ListItemSeparator from '../components/lists/ListItemSeparator';
import routes from '../navigation/routes';
import Screen from '../components/Screen';
import useAuth from '../auth/useAuth';
import authStorage from '../auth/storage';

const menuItems = [
  {
    title: 'My Listings',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary,
    },
    targetScreen: routes.MYLISTINGS,
  },
  {
    title: 'My Messages',
    icon: {
      name: 'email',
      backgroundColor: colors.secondary,
    },
    targetScreen: routes.MESSAGES,
  },
];

function AccountScreen({navigation}) {
  const {user, logOut} = useAuth();
  const restoreUser = async () => {
    const use = await authStorage.getUser();
  };
  restoreUser();

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={user.displayName}
          subTitle={user.email}
          image={require('../assets/users/account.png')}
          onPress={() => navigation.navigate(routes.EDIT_ACCOUNT_DETAILS)}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={menuItem => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({item}) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        onPress={() => logOut()}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
});

export default AccountScreen;
