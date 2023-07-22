import * as Keychain from 'react-native-keychain';

const key = 'user';

const storeUser = async user => {
  try {
    const password = '123351';
    const username = JSON.stringify(user);
    await Keychain.setGenericPassword(username, password);
    console.log('saved success');
  } catch (error) {
    console.log('Error storing the user:', error);
  }
};

const getUser = async () => {
  try {
    console.log('getting');
    const credentials = await Keychain.getGenericPassword();
    if (credentials) {
      return JSON.parse(credentials.username);
    } else {
      return null;
    }
  } catch (error) {
    console.log('Error getting the user:', error);
  }
};

const removeUser = async () => {
  try {
    await Keychain.resetGenericPassword(key);
  } catch (error) {
    console.log('Error removing the user:', error);
  }
};

export default {
  storeUser,
  removeUser,
  getUser,
};
