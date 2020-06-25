import React from "react";
import { Pagination } from "semantic-ui-react";

const PagePagination = ({ onPageChange, pagesNumber, currentPage }) => {
  const changePage = (e, { activePage }) => {
    onPageChange(activePage);
  };
  return (
    <Pagination
      boundaryRange={0}
      activePage={currentPage}
      ellipsisItem={null}
      firstItem={null}
      lastItem={null}
      siblingRange={1}
      totalPages={pagesNumber > 6 ? 6 : pagesNumber}
      onPageChange={changePage}
    />
  );
};

export default PagePagination;
