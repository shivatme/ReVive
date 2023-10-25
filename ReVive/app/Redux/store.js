import { configureStore } from "@reduxjs/toolkit";
import listingsReducer from "./listingSlice";

const store = configureStore({
  reducer: {
    listings: listingsReducer,
  },
});

export default store;
