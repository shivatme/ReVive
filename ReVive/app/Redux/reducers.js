import { createAction, createReducer } from "@reduxjs/toolkit";

const increment = createAction("increment");
const initialstate = {
  c: 0,
};

export const customReducer = createReducer(initialstate, (builder) => {
  builder.addCase(increment, (state) => {
    state.c += 1;
  });
});
