import * as SecureStore from "expo-secure-store";

const key = "user";

const storeUser = async (user) => {
  try {
    await SecureStore.setItemAsync(key, JSON.stringify(user));
  } catch (error) {
    console.log("Error storing the auth token", error);
  }
};

const getUser = async () => {
  try {
    const user = await SecureStore.getItemAsync(key);
    return JSON.parse(user);
  } catch (error) {
    console.log("Error getting the auth token.", error);
  }
};

const removeUser = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("Error removing the token", error);
  }
};

export default {
  storeUser,
  removeUser,
  getUser,
};
