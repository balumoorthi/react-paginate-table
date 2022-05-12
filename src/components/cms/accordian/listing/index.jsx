import React, { useMemo, useCallback, useState, useRef } from 'react';

// import PropTypes from 'prop-types';

import DTable from 'shared/core/datatable/index';

import modalPopup from 'shared/utils/modal';

import DModal from 'shared/antd/modal';

import { useNavigate } from 'react-router-dom';

import { confirmRemove, addItem, updateItem } from 'shared/utils/response';

import { addAccordion, updateAccordion, removeAccordion } from 'services/cms/accordion';

import AccordionForm from '../form';

import AccordionTableSchema from './schema';

const AccordionListing = () => {
  const navigate = useNavigate();

  const [isEdit, setIsEdit] = useState(false);
  const [accordionFormInitValue, setAccordionFormInitValue] = useState({});

  const accordionTableRef = useRef();

  const openAddAccordionModal = useCallback(() => {
    setIsEdit(false);
    setAccordionFormInitValue({});
    modalPopup.custom({ title: 'Add Accordion', visible: true });
  }, []);

  const viewPanel = useCallback(({ accordion_id }) => {
    localStorage.setItem("accordion_id", `${accordion_id}`);
    navigate('/dashboard/panel')
    window.location.reload();
  }, []);

  const openEditAccordionModal = useCallback(({ title, status, accordion_id }) => {
    setIsEdit(true);
    setAccordionFormInitValue({ title, status: status === "Active" ? 1 : 0, accordion_id });
    modalPopup.custom({ title: 'Edit Accordion', visible: true });
  }, []);

  const createAccordion = useCallback((data) => {
    addItem({
      method: addAccordion,
      payload: data,
      tableRef: accordionTableRef.current.reloadDTable,
      toaster: {
        success: 'Accordion added successfully',
        error: 'Accordion not added',
      },
    });
  }, []);

  const modifyAccordion = useCallback((data) => {
    const accordion_id = accordionFormInitValue?.accordion_id;
    updateItem({
      method: updateAccordion,
      payload: data,
      accordionId: accordion_id,
      tableRef: accordionTableRef.current.reloadDTable,
      toaster: {
        success: 'Accordion updated successfully',
        error: 'Accordion not updated',
      },
    });
  }, [accordionFormInitValue]);

  const deleteAccordion = useCallback((id) => {
    confirmRemove(removeAccordion, id, accordionTableRef.current.reloadDTable, {
      confirmOptions: {
        title: 'Confirmation',
        content: 'Are you sure you want to remove this Accordion?',
      },
      toasterOptions: {
        success: 'Accordion removed successfully',
        error: 'Accordion not removed',
      },
    });
  }, []);

  const accordionTable = useMemo(() => {
    AccordionTableSchema.toolbar.addBtnOnClick = openAddAccordionModal;

    AccordionTableSchema.table.actions.edit.onClick = openEditAccordionModal;

    AccordionTableSchema.table.actions.remove.onClick = deleteAccordion;

    AccordionTableSchema.table.actions.next.onClick = viewPanel;

    AccordionTableSchema.service.params = {
      // 'filters[page][id][$eq]': 8,
    };

    return AccordionTableSchema;
  });

  return (
    <div>
      <DTable tableConfig={accordionTable} ref={accordionTableRef} />
      <DModal options={{ formName: 'accordionForm' }}>
        <AccordionForm
          isEdit={isEdit}
          initValue={accordionFormInitValue}
          onSubmit={isEdit ? modifyAccordion : createAccordion}
        />
      </DModal>
    </div>
  );
};

// AccordionListing.propTypes = {};

export default AccordionListing;
