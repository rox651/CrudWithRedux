export const setPagination = (data, pageInit, postInit) => {
  const currentPage = pageInit;
  const postPerPage = postInit;

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;

  const currentPosts = data.slice(firstPostIndex, lastPostIndex);
  return currentPosts;
};
