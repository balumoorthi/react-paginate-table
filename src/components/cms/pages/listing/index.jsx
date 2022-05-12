import React, { useMemo, useCallback, useState, useRef } from 'react';

// import PropTypes from 'prop-types';

import DTable from 'shared/core/datatable/index';

import modalPopup from 'shared/utils/modal';

import DModal from 'shared/antd/modal';

import { confirmRemove, addItem, updateItem } from 'shared/utils/response';

import { removepage, addpage, updatepage } from 'services/cms/pages';

import PageForm from '../form';

import Preview from '../preview';

import PageTableSchema from './schema';

const PageListing = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [pageFormInitValue, setPageFormInitValue] = useState({});
  const [view, setView] = useState(false)

  const pageTableRef = useRef();

  const openAddPageModal = useCallback(() => {
    setView(false);
    setIsEdit(false);
    setPageFormInitValue({});
    modalPopup.custom({ title: 'Add Page', visible: true });
  }, []);

  const viewPage = useCallback(({ title, content }) => {
    setView(true);
    setPageFormInitValue({ title, content });
    modalPopup.custom({ title: 'Preview Page', visible: true });
  }, []);

  const openEditPageModal = useCallback(({ title, content, slug, status, page_id }) => {
    setView(false);
    setIsEdit(true);
    setPageFormInitValue({ title, content, slug, status: status === "Active" ? 1 : 0, page_id });
    modalPopup.custom({ title: 'Edit Page', visible: true });
  }, []);

  const createPage = useCallback((data) => {
    addItem({
      method: addpage,
      payload: data,
      tableRef: pageTableRef.current.reloadDTable,
      toaster: {
        success: 'Page added successfully',
        error: 'Page not added',
      },
    });
  }, []);

  const modifyPage = useCallback((data) => {
    const page_id = pageFormInitValue?.page_id;
    updateItem({
      method: updatepage,
      payload: data,
      pageId: page_id,
      tableRef: pageTableRef.current.reloadDTable,
      toaster: {
        success: 'Page updated successfully',
        error: 'Page not updated',
      },
    });
  }, [pageFormInitValue]);

  const deletePage = useCallback((id) => {
    setView(false);
    confirmRemove(removepage, id, pageTableRef.current.reloadDTable, {
      confirmOptions: {
        title: 'Confirmation',
        content: 'Are you sure you want to remove this Page?',
      },
      toasterOptions: {
        success: 'Page removed successfully',
        error: 'Page not removed',
      },
    });
  }, []);

  const pageTable = useMemo(() => {
    PageTableSchema.toolbar.addBtnOnClick = openAddPageModal;

    PageTableSchema.table.actions.edit.onClick = openEditPageModal;

    PageTableSchema.table.actions.remove.onClick = deletePage;

    PageTableSchema.table.actions.view.onClick = viewPage;

    PageTableSchema.service.params = {
      // 'filters[page][id][$eq]': 8,
    };

    return PageTableSchema;
  });

  return (
    <div>
      <DTable tableConfig={pageTable} ref={pageTableRef} />
      {!view &&
        <DModal options={{ formName: 'pageForm' }}>
          <PageForm
            isEdit={isEdit}
            initValue={pageFormInitValue}
            onSubmit={isEdit ? modifyPage : createPage}
          />
        </DModal>
      }
      {view &&

        <DModal show={view}>
          <Preview
            initValue={pageFormInitValue}

          />
        </DModal>
      }

    </div>
  );
};

// PageListing.propTypes = {};

export default PageListing;
