import { createSlice } from "@reduxjs/toolkit";
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "checking", //non-authenticaded, authenticaded
    uiid: null,
    email: null,
    displayName: null,
    photoUrl: null,
    errorMessage: null,
  },
  reducers: {
    login: (state /* action */) => {},
    logout: (state /* action */) => {},
    checkingCredentials: (state /* action */) => {},
  },
});
export const { login, logout, checkingCredentials } = authSlice.actions;
