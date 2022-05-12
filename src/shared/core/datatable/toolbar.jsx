import React, { useState } from 'react';

import PropTypes from 'prop-types';

import Select from 'react-select';

import { v4 as uuidv4 } from 'uuid';

import TableTitle from './TableTitle';

const Toolbar = ({ options, tableRowInfo, headerConfig }) => {
  const [bulkActionValue, setBulkActionValue] = useState();

  const {
    isVisible,
    wrapperClassNames,
    bulkActionIsVisible,
    bulkActionWrapperClassNames,
    selectWrapperClassNames,
    selectLabelIsVisible,
    selectLabelText,
    selectOptions,
    btnWrapperClassNames,
    actionBtn,
    addBtnIsVisible,
    addBtnWrapperClassNames,
    addBtnClassNames,
    addBtnText,
    addBtnIcon,
    addBtnOnClick,
  } = options;

  return (
    <div>
      {isVisible && (
        <div className={wrapperClassNames}>
          {bulkActionIsVisible && (
            <div className={bulkActionWrapperClassNames}>
              <div className={selectWrapperClassNames}>
                {selectLabelIsVisible && <h4>{selectLabelText}</h4>}
                <Select
                  {...selectOptions}
                  onChange={ev => {
                    setBulkActionValue(ev);
                  }}
                />
              </div>
              <div className={btnWrapperClassNames}>
                {Object.keys(actionBtn).map(key => {
                  const item = actionBtn[key];
                  return (
                    item.isVisible && (
                      <button
                        type="button"
                        className={item.classNames}
                        key={uuidv4()}
                        disabled={
                          tableRowInfo.length === 0 ||
                          bulkActionValue === null ||
                          bulkActionValue === undefined
                        }
                        onClick={ev => {
                          const tableRow = tableRowInfo.map(
                            row => row.original
                          );
                          const tableRowId = tableRow.map(row => row.id);
                          item.onClick({
                            tableRow,
                            tableRowId,
                            ev,
                            status: bulkActionValue.value,
                          });
                        }}
                      >
                        <i className={item.icon} />
                        {item.text}
                      </button>
                    )
                  );
                })}
              </div>
            </div>
          )}

          {!bulkActionIsVisible && <TableTitle headerConfig={headerConfig} />}

          {addBtnIsVisible && (
            <div className={addBtnWrapperClassNames}>
              <button
                type="button"
                className={addBtnClassNames}
                onClick={addBtnOnClick}
              >
                {addBtnIcon} {addBtnText}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

Toolbar.propTypes = {
  options: PropTypes.objectOf(PropTypes.any).isRequired,
  tableRowInfo: PropTypes.arrayOf(PropTypes.any).isRequired,
  headerConfig: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Toolbar;
