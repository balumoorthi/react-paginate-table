import React, { useMemo, useCallback, useState, useRef } from 'react';

// import PropTypes from 'prop-types';

import DTable from 'shared/core/datatable/index';

import modalPopup from 'shared/utils/modal';

import DModal from 'shared/antd/modal';

import { confirmRemove, addItem, updateItem } from 'shared/utils/response';

import { addPanel, updatePanel, removePanel } from 'services/cms/panel';

import Preview from '../preview/index'

import PanelForm from '../form';

import PanelTableSchema from './schema';

const PanelListing = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [panelFormInitValue, setPanelFormInitValue] = useState({});
  const [view, setView] = useState(false)

  const panelTableRef = useRef();

  const openAddPanelModal = useCallback(() => {
    setView(false);
    setIsEdit(false);
    setPanelFormInitValue({});
    modalPopup.custom({ title: 'Add Panel', visible: true });
  }, []);

  const openEditPanelModal = useCallback(({ label, status, accordion_id, content, order_id, panel_id }) => {
    setView(false);
    setIsEdit(true);
    setPanelFormInitValue({ label, status: status === "Active" ? 1 : 0, accordion_id, content, order_id, panel_id });
    modalPopup.custom({ title: 'Edit Panel', visible: true });
  }, []);

  const createPanel = useCallback((data) => {
    const accordion_id = localStorage.getItem('accordion_id');
    const order_id = 1;
    const newData = { ...data, order_id, accordion_id }
    addItem({
      method: addPanel,
      payload: newData,
      tableRef: panelTableRef.current.reloadDTable,
      toaster: {
        success: 'Panel added successfully',
        error: 'Panel not added',
      },
    });
  }, []);

  const modifyPanel = useCallback((data) => {
    const accordion_id = localStorage.getItem('accordion_id');
    const order_id = panelFormInitValue?.panel_id;
    const panel_id = panelFormInitValue?.panel_id;
    const newData = { ...data, accordion_id, order_id }
    updateItem({
      method: updatePanel,
      payload: newData,
      panelId: panel_id,
      tableRef: panelTableRef.current.reloadDTable,
      toaster: {
        success: 'Panel updated successfully',
        error: 'Panel not updated',
      },
    });
  }, [panelFormInitValue]);

  const deletePanel = useCallback((id) => {
    setView(false);
    confirmRemove(removePanel, id, panelTableRef.current.reloadDTable, {
      confirmOptions: {
        title: 'Confirmation',
        content: 'Are you sure you want to remove this Panel?',
      },
      toasterOptions: {
        success: 'Panel removed successfully',
        error: 'Panel not removed',
      },
    });
  }, []);

  const viewContent = useCallback(({ label, content }) => {
    setView(true);
    setPanelFormInitValue({ label, content });
    modalPopup.custom({ title: 'Preview Page', visible: true });
  }, []);

  const panelTable = useMemo(() => {
    PanelTableSchema.toolbar.addBtnOnClick = openAddPanelModal;

    PanelTableSchema.table.actions.edit.onClick = openEditPanelModal;

    PanelTableSchema.table.actions.remove.onClick = deletePanel;

    PanelTableSchema.table.actions.view.onClick = viewContent;

    PanelTableSchema.service.params = {
      'filters[page][id][$eq]': 8,
    };

    return PanelTableSchema;
  });

  return (
    <div>
      <DTable tableConfig={panelTable} ref={panelTableRef} />
      {!view &&
        <DModal options={{ formName: 'panelForm' }}>
          <PanelForm
            isEdit={isEdit}
            initValue={panelFormInitValue}
            onSubmit={isEdit ? modifyPanel : createPanel}
          />
        </DModal>
      }
      {view &&
        <DModal show={view}>
          <Preview
            initValue={panelFormInitValue}
          />
        </DModal>
      }
    </div>
  );
};

// PanelListing.propTypes = {};

export default PanelListing;
