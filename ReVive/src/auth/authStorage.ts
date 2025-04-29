import * as SecureStore from "expo-secure-store";

const key = "user";

type User = Record<string, any>; // Replace with a more specific type if available

const storeUser = async (user: User): Promise<void> => {
  try {
    const json = JSON.stringify(user);
    await SecureStore.setItemAsync(key, json);
    console.log("Saved successfully");
  } catch (error) {
    console.log("Error storing the user:", error);
  }
};

const getUser = async (): Promise<User | null> => {
  try {
    const json = await SecureStore.getItemAsync(key);
    return json ? JSON.parse(json) : null;
  } catch (error) {
    console.log("Error getting the user:", error);
    return null;
  }
};

const removeUser = async (): Promise<void> => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("Error removing the user:", error);
  }
};

export default {
  storeUser,
  getUser,
  removeUser,
};
