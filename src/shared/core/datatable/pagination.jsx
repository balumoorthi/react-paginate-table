import React from 'react';

import ReactPaginate from 'react-paginate';

import PropTypes from 'prop-types';

const Pagination = ({ options }) => {
  const {
    gotoPage,
    canPreviousPage,
    canNextPage,
    pageCount,
    pageIndex,
    pageOptions,
    config,
    totalCount,
  } = options;

  return (
    <div className={config.wrapperClassNames}>
      {config.result.isVisible && (
        <div className={config.result.wrapperClassNames}>
          <span className={config.result.firstLabel.classNames}>
            {config.result.firstLabel.labelText}
          </span>
          <span className={config.result.centerLabel.classNames}>
            &nbsp;{pageIndex + 1} to {pageOptions.length}&nbsp; of {totalCount}{' '}
            &nbsp;
          </span>
          <span className={config.result.firstLabel.classNames}>
            {config.result.lastLabel.labelText}
          </span>
        </div>
      )}

      {config.isVisible && (
        <div className="pagination-section">
          <button
            type="button"
            className={config.lastPageClassNames}
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
          >
            <i className={config.lastPageIcon} />
          </button>
          <ReactPaginate
            breakLabel={
              <span className={config.breakLabelClassNames}>
                {config.breakLabelText}
              </span>
            }
            nextLabel={<span className={config.nextLabelIcon} />}
            onPageChange={ev => gotoPage(ev.selected)}
            pageRangeDisplayed={config.pageRangeDisplayed}
            pageCount={pageCount}
            previousLabel={<span className={config.previousLabelIcon} />}
            renderOnZeroPageCount={null}
            className={config.pageLinkClassNames}
          />
          <button
            type="button"
            className={config.firstPageClassNames}
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            <i className={config.firstPageIcon} />
          </button>
        </div>
      )}

      {config.gotoPage.isVisible && (
        <div className={config.gotoPage.wrapperClassNames}>
          <label htmlFor="goto" className={config.gotoPage.labelClassNames}>
            {config.gotoPage.labelText}
          </label>
          <input
            id="goto"
            type="number"
            defaultValue={pageIndex + 1}
            min={1}
            max={pageOptions.length}
            className={config.gotoPage.inputClassNames}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
          />
        </div>
      )}
    </div>
  );
};

Pagination.propTypes = {
  options: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Pagination;
