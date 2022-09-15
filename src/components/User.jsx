import { useDispatch } from "react-redux";
import { BiCheckbox, BiCheckboxChecked } from "react-icons/bi";

import { openForm, removeData, setUserEdit, setCheck } from "../store/slices/CRUD";

export const User = ({ user }) => {
  const { username, state, type, email, id, select } = user;
  const dispatch = useDispatch();

  const checkBox = select ? <BiCheckboxChecked className="text-2xl" /> : <BiCheckbox className="text-2xl" />;

  return (
    <tr className="border-b">
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap cursor-pointer" onClick={() => dispatch(setCheck(id))}>
        {checkBox}
      </td>
      <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap font-bold capitalize">{username}</td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{state}</td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{type}</td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{email}</td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap flex gap-3">
        <button
          className="text-blue-500 font-black"
          onClick={() => {
            dispatch(setUserEdit(user));
            dispatch(openForm());
          }}
        >
          Editar
        </button>
        <button
          onClick={() => {
            dispatch(removeData(id));
          }}
          className="text-red-500 font-black"
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};
