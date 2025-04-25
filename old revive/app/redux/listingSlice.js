import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import dbManager from '../firebase/database';

const initialState = {
  listings: [],
  status: 'idle',
  error: null,
};

const listingSlice = createSlice({
  name: 'listings',
  initialState,
  reducers: {
    // addListing: (state, action) => {
    //   state.listings.push(action.payload);
    // },
    updateListing: (state, action) => {
      const {id, favorite} = action.payload;
      const existingListing = state.listings.find(listing => listing.id === id);
      if (existingListing) {
        existingListing.favorite = favorite;
        dbManager.updateListing(existingListing);
      }
      console.log(id, favorite);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchListings.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchListings.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const listingsArray = Object.entries(action.payload).map(
          ([listingId, listing]) => ({
            id: listingId,
            title: listing.title,
            price: listing.price,
            images: listing.images,
            category: listing.categoryId,
            favorite: listing.favorite,
          }),
        );
        state.listings = listingsArray;
      })
      .addCase(fetchListings.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});
export const {addListing, updateListing} = listingSlice.actions;

export default listingSlice.reducer;

export const selectAllListings = state => state.listings.listings;

export const selectListingById = (state, listingId) =>
  state.listings.listings.find(listing => listing.id === listingId);

export const fetchListings = createAsyncThunk(
  'listings/fetchListings',
  async () => {
    const response = await dbManager.getListings();
    return response;
  },
);
