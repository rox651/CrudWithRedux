import { useDispatch, useSelector } from "react-redux";
import { clsx } from "clsx";

import { setCurrentPage } from "../../store/slices/CRUD";

export const Pagination = () => {
  const { data, currentPage, postPerPage } = useSelector((state) => state.crud);
  const dispatch = useDispatch();

  let pages = [];

  for (let i = 1; i <= Math.ceil(data.length / postPerPage); i++) {
    pages.push(i);
  }

  return (
    <section className="flex flex-wrap gap-2">
      {pages.map((page) => {
        return (
          <button
            className={clsx(
              currentPage == page ? "bg-gray-800" : "bg-gray-500",
              "text-white px-3 transition-shadow hover:shadow-xl ",
            )}
            onClick={() => dispatch(setCurrentPage(page))}
            key={page}
          >
            {page}
          </button>
        );
      })}
    </section>
  );
};
