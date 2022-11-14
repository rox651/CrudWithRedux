import { clsx } from "clsx";
import { useSelector } from "react-redux";
import { setPagination } from "../../helper/";
import { User } from "./User";

export const DataUsers = () => {
  const { data, currentPage, postPerPage } = useSelector((state) => state.crud);
  const isDataWithUsers = data.length > 0;

  const currentPosts = setPagination(data, currentPage, postPerPage);

  return (
    <table className={clsx(isDataWithUsers && "inline-block lg:table overflow-auto")}>
      <thead className="border-b bg-gray-800">
        <tr className={clsx(!isDataWithUsers && "hidden")}>
          <th scope="col" className="text-sm text-start font-medium text-white px-6 py-4">
            Seleccion
          </th>
          <th scope="col" className="text-sm text-start font-medium text-white px-6 py-4">
            Nombre
          </th>
          <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-start">
            Estado
          </th>
          <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-start">
            Tipo
          </th>
          <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-start">
            Email
          </th>
          <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-start">
            Acciones
          </th>
        </tr>
      </thead>
      <tbody>
        {isDataWithUsers ? (
          currentPosts.map((user) => <User key={user.id} user={user} />)
        ) : (
          <tr className="text-center font-bold text-3xl text-sky-900">
            <td colSpan="4">No hay datos</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};
