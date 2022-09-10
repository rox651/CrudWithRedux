import { useDispatch, useSelector } from "react-redux";
import { removeSelectData } from "../store/slices/CRUD";



export const Footer = () => {
  const { data } = useSelector((state) => state.crud);
  const dataSelect = data.filter((user) => user.select == true);

  const dispatch = useDispatch();

  return (
    <footer className="flex">
      <section>
        <button className=" text-red-500" onClick={()=>dispatch(removeSelectData())}>
          Eliminar <strong>{dataSelect.length}</strong>
        </button>
        <strong className="ml-3">Total: {data.length} Usuarios</strong>
      </section>
    </footer>
  );
};
