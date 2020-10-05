import React from "react";
import Pagination from "react-bootstrap/Pagination";

const PaginationComp = ({ itemsPerPage, searchResult, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(searchResult / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const returnPaginationJSX = pageNumbers.map((number) => {
    if (number < 6) {
      return (
        <Pagination.Item key={number} onClick={() => paginate(number)}>
          {number}
        </Pagination.Item>
      );
    }
    if (number === 6) {
      return <Pagination.Ellipsis key="hjksg0975%" />;
    }
    return null;
  });

  return (
    <>
      <Pagination>{returnPaginationJSX}</Pagination>
    </>
  );
};

export default PaginationComp;
