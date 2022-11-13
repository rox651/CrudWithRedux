import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { v4 as uuid } from "uuid";

import { openForm, addData, setUserEdit, editData } from "../store/slices/CRUD";

export const useFormCrud = (initialForm = {}) => {
  //redux
  const { userEdit } = useSelector((state) => state.crud);
  const dispatch = useDispatch();

  const [formState, setFormState] = useState(initialForm);

  const isUserNull = userEdit.id !== null;

  useEffect(() => {
    if (isUserNull) {
      setFormState({
        ...formState,
        username: userEdit.username,
        email: userEdit.email,
      });
    }
  }, [userEdit]);

  const onInputChange = ({ target }) => {
    const { name, value } = target;

    console.log(value);

    if (isUserNull) {
      dispatch(
        setUserEdit({
          ...userEdit,
          [name]: value,
        }),
      );
      return;
    }

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = (e) => {
    e.preventDefault();
    const isEmpty = [formState.username, formState.email].includes("");

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
        ...formState,
      }),
    );
    setFormState(initialForm);
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
    setFormState(initialForm);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
    closeForm,
  };
};
