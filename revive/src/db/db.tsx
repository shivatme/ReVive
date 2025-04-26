import database from '@react-native-firebase/database';

async function getListings() {
  try {
    const response = database()
      .ref('listings/')
      .once('value')
      .then(snapshot => {
        const data = snapshot.val();
        return data;
      });
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default {
  getListings,
};
