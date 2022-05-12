import React, { useMemo, useCallback, useState, useRef } from 'react';

// import PropTypes from 'prop-types';

import DTable from 'shared/core/datatable/index';

import modalPopup from 'shared/utils/modal';

import DModal from 'shared/antd/modal';

import { confirmRemove, addItem, updateItem } from 'shared/utils/response';

import { addMenu, updateMenu, removeMenu } from 'services/cms/menu';

import MenuForm from '../form';

import MenuTableSchema from './schema';

const MenuListing = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [menuFormInitValue, setMenuFormInitValue] = useState({});

  const menuTableRef = useRef();

  const openAddMenuModal = useCallback(() => {
    setIsEdit(false);
    setMenuFormInitValue({});
    modalPopup.custom({ title: 'Add Menu', visible: true });
  }, []);

  const openEditMenuModal = useCallback(({ title, status, menu_id }) => {
    setIsEdit(true);
    setMenuFormInitValue({ title, status: status === "Active" ? 1 : 0, menu_id });
    modalPopup.custom({ title: 'Edit Menu', visible: true });
  }, []);

  const createMenu = useCallback((data) => {
    addItem({
      method: addMenu,
      payload: data,
      tableRef: menuTableRef.current.reloadDTable,
      toaster: {
        success: 'Menu added successfully',
        error: 'Menu not added',
      },
    });
  }, []);

  const modifyMenu = useCallback((data) => {
    const menu_id = menuFormInitValue?.menu_id;
    updateItem({
      method: updateMenu,
      payload: data,
      menuId: menu_id,
      tableRef: menuTableRef.current.reloadDTable,
      toaster: {
        success: 'Menu updated successfully',
        error: 'Menu not updated',
      },
    });
  }, [menuFormInitValue]);

  const deleteMenu = useCallback((id) => {
    confirmRemove(removeMenu, id, menuTableRef.current.reloadDTable, {
      confirmOptions: {
        title: 'Confirmation',
        content: 'Are you sure you want to remove this Menu?',
      },
      toasterOptions: {
        success: 'Menu removed successfully',
        error: 'Menu not removed',
      },
    });
  }, []);

  const menuTable = useMemo(() => {
    MenuTableSchema.toolbar.addBtnOnClick = openAddMenuModal;

    MenuTableSchema.table.actions.edit.onClick = openEditMenuModal;

    MenuTableSchema.table.actions.remove.onClick = deleteMenu;

    MenuTableSchema.service.params = {
      // 'filters[page][id][$eq]': 8,
    };

    return MenuTableSchema;
  });

  return (
    <div>
      <DTable tableConfig={menuTable} ref={menuTableRef} />
      <DModal options={{ formName: 'menuForm' }}>
        <MenuForm
          isEdit={isEdit}
          initValue={menuFormInitValue}
          onSubmit={isEdit ? modifyMenu : createMenu}
        />
      </DModal>
    </div>
  );
};

// MenuListing.propTypes = {};

export default MenuListing;
