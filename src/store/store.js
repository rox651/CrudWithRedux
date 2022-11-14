import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/Auth";
import { crudSlice } from "./slices/CRUD";

export const store = configureStore({
  reducer: {
    crud: crudSlice.reducer,
    auth: authSlice.reducer,
  },
});
