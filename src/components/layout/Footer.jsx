import { Pagination, DeleteSection } from "./";

export const Footer = () => {
  return (
    <footer className="flex items-center gap-4 justify-between">
      <DeleteSection />
      <Pagination />
    </footer>
  );
};
