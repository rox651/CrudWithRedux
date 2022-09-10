import { configureStore } from "@reduxjs/toolkit";
import { crudSlice } from "./slices/CRUD";

export const store = configureStore({
  reducer: {
    crud: crudSlice.reducer,
  },
});
