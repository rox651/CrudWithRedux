import { useDispatch, useSelector } from "react-redux";

import { removeSelectData } from "../../store/slices/CRUD";

export const DeleteSection = () => {
  const { data } = useSelector((state) => state.crud);
  const dataSelect = data.filter((user) => user.select == true);

  const dispatch = useDispatch();
  return (
    <section className="flex-col items-start sm:flex-row flex gap-3">
      <button className=" text-red-500" onClick={() => dispatch(removeSelectData())}>
        Eliminar <strong>{dataSelect.length}</strong>
      </button>
      <strong>Total: {data.length} Usuarios</strong>
    </section>
  );
};
