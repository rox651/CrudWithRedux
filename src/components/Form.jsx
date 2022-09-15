import { useSelector } from "react-redux";
import { clsx } from "clsx";
import { GrClose } from "react-icons/gr";

import { useFormCrud } from "../hooks/useFormCrud";

export const Form = () => {
  //redux
  const { isOpenForm, userEdit } = useSelector((state) => state.crud);
  const { form, userName, email, onSubmitForm, onHandleChange, closeForm } = useFormCrud();

  return (
    <div className={clsx(isOpenForm ? "grid" : "hidden", "absolute w-full h-screen bg-[#1f293770] place-items-center")}>
      <form className="bg-white h-[350px] w-[350px] relative p-10" onSubmit={onSubmitForm} ref={form}>
        <header className="flex justify-between items-center">
          <h2 className="text-slate-600 text-2xl font-bold">Formulario</h2>
          <GrClose className=" cursor-pointer" onClick={closeForm} />
        </header>
        <div className="flex flex-col justify-evenly h-full">
          <input
            className="border-2 px-3 py-2"
            onChange={onHandleChange}
            type="text"
            name="username"
            placeholder="Nombre de usuario"
            ref={userName}
          />
          <input
            className="border-2 px-3 py-2"
            onChange={onHandleChange}
            type="email"
            name="email"
            placeholder="Email"
            ref={email}
          />
          <input
            className="bg-gray-800 text-white px-3 py-2 rounded-md text-sm cursor-pointer"
            type="submit"
            value={userEdit.id !== null ? "Editar" : "Agregar"}
          />
          <input
            className="bg-gray-800 text-white px-3 py-2 rounded-md text-sm cursor-pointer"
            type="reset"
            value="Limpiar"
          />
        </div>
      </form>
    </div>
  );
};
