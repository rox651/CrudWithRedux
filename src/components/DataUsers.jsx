import { useSelector } from "react-redux";
import { User } from "./User";

import {clsx} from "clsx";
 

export const DataUsers = () => {
  const { data } = useSelector((state) => state.crud);

  const dataWithUsers = data.length > 0 

  return (
    <table className=" inline-block overflow-auto">
      <thead className="border-b bg-gray-800">
        <tr className={clsx(dataWithUsers ? "" : "hidden")}>
          <th scope="col" className="text-sm text-start font-medium text-white px-6 py-4">Seleccion</th>
          <th scope="col" className="text-sm text-start font-medium text-white px-6 py-4">Nombre</th>
          <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-start">Estado</th>
          <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-start">Tipo</th>
          <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-start">Email</th>
          <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-start">Acciones</th>
        </tr>
      </thead>
      <tbody>
          {dataWithUsers? (
            data.map((user) => <User key={user.id} user={user} />)
          ) : (
            <tr className="  text-center font-bold text-3xl text-sky-900">
              <td colSpan="4">No hay datos</td>
            </tr>
          )}
      </tbody>
    </table>
  );
};
