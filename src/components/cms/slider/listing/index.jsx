import React, { useState, useMemo, useCallback, useRef } from 'react';

// import PropTypes from 'prop-types';

import DTable from 'shared/core/datatable/index';

import DModal from 'shared/antd/modal';

import modalPopup from 'shared/utils/modal';

import { confirmRemove, addItem, updateItem } from 'shared/utils/response';

import { addSlider, updateSlider, removeSlider } from 'services/cms/slider';

import SliderForm from '../form';

import SliderTableSchema from './schema';

const SliderListing = () => {
  const [isEdit, setIsEdit] = useState(false);

  const [sliderFormInitValue, setSliderFormInitValue] = useState({});

  const sliderTableRef = useRef();

  const openAddSliderModal = useCallback(() => {
    setIsEdit(false);
    setSliderFormInitValue({});
    modalPopup.custom({ title: 'Add Slider', visible: true });
  }, []);

  const openEditSliderModal = useCallback(({ title, project_id, status, slider_id }) => {
    setIsEdit(true);
    setSliderFormInitValue({ title, project_id, status: status === "Active" ? 1 : 0, slider_id });
    modalPopup.custom({ title: 'Edit Slider', visible: true });
  }, []);

  const createSlider = useCallback(data => {
    const project_id = localStorage.getItem('project_id');
    const UpdatedData = { ...data, project_id }
    addItem({
      method: addSlider,
      payload: UpdatedData,
      tableRef: sliderTableRef.current.reloadDTable,
      toaster: {
        success: 'Slider added successfully',
        error: 'Slider not added',
      },
    });
  }, []);

  const modifySlider = useCallback((data) => {
    const slider_id = sliderFormInitValue?.slider_id;
    const project_id = sliderFormInitValue?.project_id;
    const UpdatedData = { ...data, project_id }
    updateItem({
      method: updateSlider,
      payload: UpdatedData,
      sliderId: slider_id,
      tableRef: sliderTableRef.current.reloadDTable,
      toaster: {
        success: 'Slider updated successfully',
        error: 'Slider not updated',
      },
    });
  }, [sliderFormInitValue]);

  const deleteSlider = useCallback((id) => {
    confirmRemove(removeSlider, id, sliderTableRef.current.reloadDTable, {
      confirmOptions: {
        title: 'Confirmation',
        content: 'Are you sure you want to remove this Slider?',
      },
      toasterOptions: {
        success: 'Slider removed successfully',
        error: 'Slider not removed',
      },
    });
  }, []);

  const sliderTable = useMemo(() => {
    SliderTableSchema.toolbar.addBtnOnClick = openAddSliderModal;

    SliderTableSchema.table.actions.edit.onClick = openEditSliderModal;

    SliderTableSchema.table.actions.remove.onClick = deleteSlider;

    SliderTableSchema.service.params = {
      'filters[user][id][$eq]': 8,
    };

    return SliderTableSchema;
  });

  return (
    <>
      <DTable tableConfig={sliderTable} ref={sliderTableRef} />
      <DModal options={{ formName: 'sliderForm' }}>
        <SliderForm
          isEdit={isEdit}
          initValue={sliderFormInitValue}
          onSubmit={isEdit ? modifySlider : createSlider}
        />
      </DModal>
    </>
  );
};

// SliderListing.propTypes = {};

export default SliderListing;
