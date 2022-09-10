import { AiOutlineUserAdd } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { openForm } from "../store/slices/CRUD/";

export const Header = () => {
  const dispatch = useDispatch();
  return (
    <header className="flex justify-between">
      <h1 className=" text-slate-600 md:text-2xl font-bold">
        Gestión de Usuarios
      </h1>
      <button
        onClick={() => dispatch(openForm())}
        className="flex place-items-center gap-2 bg-gray-800 text-white px-3 py-2 rounded-md text-sm"
      >
        <AiOutlineUserAdd className="text-xl" />
        Agregar
      </button>
    </header>
  );
};
