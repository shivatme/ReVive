import firebaseApp from "../config/firebaseConfig";
import { getDatabase, ref, set, push, get } from "firebase/database";

const database = getDatabase(firebaseApp);

const newListing = (listing) => {
  set(ref(database, "listings/" + listing.id), {
    title: listing.title,
    price: listing.price,
    description: listing.description,
    images: listing.images,
    favorite: false,
  })
    .then(() => {
      console.log("successfully listed");
    })
    .catch(() => console.log("failed"));
};

const getListings = async () => {
  try {
    const listingsRef = ref(database, "listings/");
    const snapshot = await get(listingsRef);

    if (snapshot.exists()) {
      const data = snapshot.val();
      return data;
    } else {
      console.log("No data available");
      return null;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default {
  newListing,
  getListings,
};
