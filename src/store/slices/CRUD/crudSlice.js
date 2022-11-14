import { createSlice } from "@reduxjs/toolkit";

export const crudSlice = createSlice({
  name: "crud",
  initialState: {
    data: [
      {
        id: 223123,
        username: "Usuario1",
        email: "usuario69@gmail.com",
        state: "Activo",
        type: "admin",
        select: false,
      },
      {
        id: 123143,
        username: "Usuario2",
        email: "usuario69@gmail.com",
        state: "Activo",
        type: "admin",
        select: false,
      },
      {
        id: 523143,
        username: "Usuario2",
        email: "usuario69@gmail.com",
        state: "Activo",
        type: "admin",
        select: false,
      },
      {
        id: 723143,
        username: "Usuario2",
        email: "usuario69@gmail.com",
        state: "Activo",
        type: "admin",
        select: false,
      },
      {
        id: 823143,
        username: "Usuario2",
        email: "usuario69@gmail.com",
        state: "Activo",
        type: "admin",
        select: false,
      },
      {
        id: 923143,
        username: "Usuario2",
        email: "usuario69@gmail.com",
        state: "Activo",
        type: "admin",
        select: false,
      },
      {
        id: 1023143,
        username: "Usuario2",
        email: "usuario69@gmail.com",
        state: "Activo",
        type: "admin",
        select: false,
      },
      {
        id: 123343,
        username: "Karen",
        email: "usuario69@gmail.com",
        state: "Activo",
        type: "admin",
        select: false,
      },
    ],
    isOpenForm: false,
    userEdit: {
      id: null,
    },
    currentPage: 1,
    postPerPage: 4,
  },
  reducers: {
    //add user
    addData: (state, { payload = {} }) => {
      state.data.push(payload);
    },
    //remove user
    removeData: (state, { payload = "" }) => {
      const confirmRemove = confirm(`Desea eliminar este usuario?`);

      if (confirmRemove) state.data = state.data.filter((user) => user.id !== payload);
    },
    //edit user
    editData: (state, action) => {
      state.data = state.data.map((user) => {
        return user.id == action.payload.id ? action.payload : user;
      });
    },

    setUserEdit: (state, { payload }) => {
      state.userEdit = payload;
    },

    //set selected to the user
    setCheck: (state, { payload }) => {
      state.data = state.data.map((user) => {
        if (user.id == payload) {
          user.select = !user.select;
        }
        return user;
      });
    },

    //remove user selected
    removeSelectData: (state) => {
      const filterDataNoneSelect = state.data.filter((user) => user.select !== true);
      const filterDataSelect = state.data.filter((user) => user.select == true);

      if (filterDataSelect.length > 0) {
        const confirmRemove = confirm("Deseas eliminar los usuarios seleccionados?");

        if (confirmRemove) state.data = filterDataNoneSelect;
      }
    },

    //open crud form
    openForm: (state) => {
      state.isOpenForm = !state.isOpenForm;
    },

    //set the new page to display
    setCurrentPage: (state, { payload }) => {
      state.currentPage = payload;
    },
  },
});
export const { addData, removeData, editData, openForm, setUserEdit, removeSelectData, setCheck, setCurrentPage } =
  crudSlice.actions;
