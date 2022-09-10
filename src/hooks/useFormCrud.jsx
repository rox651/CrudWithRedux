import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { v4 as uuid } from "uuid";

import {
  openForm,
  addData,
  setUserEdit,
  editData,
} from "../store/slices/CRUD/";

export const useFormCrud = () => {
  //redux
  const { userEdit } = useSelector((state) => state.crud);
  const dispatch = useDispatch();

  //form
  let initialUser = {
    username: "",
    state: "Activo",
    email: "",
    type: "Admin",
    select: false,
  };
  const form = useRef();
  const userName = useRef();
  const email = useRef();

  const [user, setUser] = useState(initialUser);

  //functions

  useEffect(() => {
    if (userEdit.id !== null) {
      console.log(userEdit);
      userName.current.value = userEdit.username;
      email.current.value = userEdit.email;
    }
  }, [userEdit]);

  const onHandleChange = (e) => {
    if (userEdit.id !== null) {
      dispatch(
        setUserEdit({
          ...userEdit,
          [e.target.name]: e.target.value,
        })
      );
      return;
    }
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    if ([userName.current.value, email.current.value].includes("")) {
      alert("Completa todos los campos");
      return;
    }

    if (userEdit.id !== null) {
      dispatch(editData(userEdit));
      dispatch(
        setUserEdit({
          id: null,
        })
      );
      dispatch(openForm());
      form.current.reset();
      return;
    }

    dispatch(
      addData({
        id: uuid(),
        ...user,
      })
    );
    setUser(initialUser);
    dispatch(openForm());
    form.current.reset();
  };

  const closeForm = () => {
    dispatch(
      setUserEdit({
        id: null,
      })
    );
    dispatch(openForm());
    form.current.reset();
  };

  return { form, userName, email, onHandleChange, onSubmitForm, closeForm };
};
