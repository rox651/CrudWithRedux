import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
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

  const onSubmitForm = (e) => {
    e.preventDefault();
    const isEmpty = [formState.username, formState.email].includes("");

    if (isEmpty) {
      toast.warning("Completa todos los campos");
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
    onResetForm();
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
    onResetForm();
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onSubmitForm,
    onResetForm,
    closeForm,
  };
};
