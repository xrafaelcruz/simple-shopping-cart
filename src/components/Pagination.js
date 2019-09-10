import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import PaginationStyle, { PagingButton } from 'styles/Pagination';
import Paginate from 'assets/scripts/paginate';

function Pagination(props) {
  const [paginate, setPaginate] = useState(new Paginate(props.totalItems, props.pageSize, props.maxPage));

  useEffect(() => {
    setPaginate(new Paginate(props.totalItems, props.pageSize, props.maxPage));
  }, [props.totalItems, props.pageSize, props.maxPage]);

  function requestPage(newPage = 1) {
    const isValidPage = newPage >= 1 && newPage <= paginate.totalPages;

    if (isValidPage) {
      const begin = Number((newPage - 1) * props.pageSize);
      const end = Number(newPage * props.pageSize);

      props.getItems(begin, end);

      setPaginate(new Paginate(props.totalItems, props.pageSize, props.maxPage, newPage));
    }
  }

  if (paginate.totalItems > 0) {
    return (
      <PaginationStyle data-component="pagination">
        <PagingButton onClick={() => requestPage(1)}>
          <i className="fas fa-angle-double-left" />
        </PagingButton>

        <PagingButton onClick={() => requestPage(paginate.currentPage - 1)}>
          <i className="fas fa-angle-left" />
        </PagingButton>

        {paginate.pages.map((page, i) => (
          <PagingButton key={i} onClick={() => requestPage(page)} active={paginate.currentPage === page ? true : false}>
            {page}
          </PagingButton>
        ))}

        <PagingButton onClick={() => requestPage(paginate.currentPage + 1)}>
          <i className="fas fa-angle-right" />
        </PagingButton>

        <PagingButton onClick={() => requestPage(paginate.totalPages)}>
          <i className="fas fa-angle-double-right" />
        </PagingButton>
      </PaginationStyle>
    );
  }

  return null;
}

Pagination.propTypes = {
  totalItems: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  maxPage: PropTypes.number.isRequired,
  getItems: PropTypes.func.isRequired
};

export default Pagination;
