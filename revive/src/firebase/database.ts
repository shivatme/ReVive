import firebaseApp from "../config/firebaseConfig";
import {
  getDatabase,
  ref,
  set,
  push,
  get,
  DatabaseReference,
} from "firebase/database";

// Define types for listing
interface Listing {
  id: string;
  title: string;
  price: number; // Change to number if price is numeric
  description: string; // Add description field
  images: string[];
  favorite: boolean;
}

const database = getDatabase(firebaseApp);

const newListing = (listing: Listing): void => {
  set(ref(database, "listings/" + listing.id), {
    title: listing.title,
    price: listing.price,
    description: listing.description, // Ensure description is provided
    images: listing.images,
    favorite: false,
  })
    .then(() => {
      console.log("successfully listed");
    })
    .catch(() => console.log("failed"));
};

const updateListing = (listing: Listing): void => {
  set(ref(database, "listings/" + listing.id), {
    title: listing.title,
    price: listing.price,
    images: listing.images,
    favorite: listing.favorite,
  })
    .then(() => {
      console.log("successfully updated");
    })
    .catch(() => console.log("failed"));
};

const getListings = async (): Promise<Record<string, Listing> | null> => {
  try {
    const listingsRef: DatabaseReference = ref(database, "listings/");
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
  updateListing,
};
