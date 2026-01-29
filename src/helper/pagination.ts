const getPagination = (currentPage: number, totalPages: number, siblingCount = 1) => {
  const pages: (number | string)[] = [];

  // Always show first page
  pages.push(1);

  // Left dots
  if (currentPage - siblingCount > 2) {
    pages.push("...");
  }

  // Middle pages
  const start = Math.max(2, currentPage - siblingCount);
  const end = Math.min(totalPages - 1, currentPage + siblingCount);

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  // Right dots
  if (currentPage + siblingCount < totalPages - 1) {
    pages.push("...");
  }

  // Always show last page
  if (totalPages > 1) {
    pages.push(totalPages);
  }

  return pages;
};
export default getPagination;