import { createSlice } from "@reduxjs/toolkit";
export const crudSlice = createSlice({
  name: "crud",
  initialState: {
    data: [
      {
        id: 123123,
        username: "Homero",
        email: "homerojose69@gmail.com",
        state: "Activo",
        type: "admin",
        select: false,
      },
      {
        id: 12123,
        username: "Homero",
        email: "homerojose69@gmail.com",
        state: "Activo",
        type: "admin",
        select: true,
      },
    ],
    isOpenForm: false,
    userEdit: {
      id: null,
    },
  },
  reducers: {
    addData: (state, { payload = {} }) => {
      state.data.push(payload);
    },
    removeData: (state, { payload = "" }) => {
      state.data = state.data.filter((user) => user.id !== payload);
    },
    removeSelectData: (state) => {
      const confirmRemove = confirm(
        "Deseas eliminar los usuarios seleccionados?"
      );

      if (confirmRemove) {
        state.data = state.data.filter((user) => user.select !== true);
      }
    },
    setCheck: (state, { payload }) => {
      state.data = state.data.map((user) => {
        if (user.id == payload) {
          user.select = !user.select;
        }
        return user;
      });
    },
    editData: (state, action) => {
      state.data = state.data.map((user) => {
        return user.id == action.payload.id ? action.payload : user;
      });
    },
    setUserEdit: (state, { payload }) => {
      state.userEdit = payload;
    },
    openForm: (state) => {
      state.isOpenForm = !state.isOpenForm;
    },
  },
});
export const {
  addData,
  removeData,
  editData,
  openForm,
  setUserEdit,
  removeSelectData,
  setCheck,
} = crudSlice.actions;
