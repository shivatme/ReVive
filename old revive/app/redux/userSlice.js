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
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});
export const {addListing} = listingSlice.actions;

export default listingSlice.reducer;

export const selectAllListings = state => state.listings.listings;

export const selectListingById = (state, listingId) =>
  state.listings.listings.find(listing => listings.id === listingId);

export const fetchUsers = createAsyncThunk(
  'listings/fetchListings',
  async () => {
    const response = await dbManager.getListings();
    return response;
  },
);
