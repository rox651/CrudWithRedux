import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { v4 as uuid } from "uuid";

import { openForm, addData, setUserEdit, editData } from "../store/slices/CRUD";

export const useFormCrud = () => {
  //redux
  const { userEdit } = useSelector((state) => state.crud);
  const dispatch = useDispatch();

  //form
  const initialUser = {
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

  //condition
  const isUserNull = userEdit.id !== null;

  //functions

  useEffect(() => {
    if (isUserNull) {
      userName.current.value = userEdit.username;
      email.current.value = userEdit.email;
    }
  }, [userEdit]);

  const onHandleChange = (e) => {
    if (isUserNull) {
      dispatch(
        setUserEdit({
          ...userEdit,
          [e.target.name]: e.target.value,
        }),
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
    const isEmpty = [userName.current.value, email.current.value].includes("");

    if (isEmpty) {
      alert("Completa todos los campos");
      return;
    }

    if (isUserNull) {
      dispatch(editData(userEdit));
      closeForm();
      return;
    }

    dispatch(
      addData({
        id: uuid(),
        ...user,
      }),
    );
    setUser(initialUser);
    closeForm();
  };

  const closeForm = () => {
    if (isUserNull) {
      dispatch(
        setUserEdit({
          id: null,
        }),
      );
    }

    dispatch(openForm());
    form.current.reset();
  };

  return { form, userName, email, onHandleChange, onSubmitForm, closeForm };
};
