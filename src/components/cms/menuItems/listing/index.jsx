import React, { useMemo, useCallback, useState, useRef, useEffect } from 'react';

// import PropTypes from 'prop-types';

import DTable from 'shared/core/datatable/index';

import modalPopup from 'shared/utils/modal';

import DModal from 'shared/antd/modal';

import { confirmRemove, addItem, updateItem } from 'shared/utils/response';

import { addMenuItem, updateMenuItem, removeMenuItem } from 'services/cms/menuItems';

import MenuSelect from 'components/menuSelect'

import MenuItemsForm from '../form';

import MenuItemsTableSchema from './schema';

const MenuItemsListing = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [menuItemFormInitValue, setMenuItemFormInitValue] = useState({});
  const [view, setView] = useState(false);
  const menuItemTableRef = useRef();

  const openAddMenuItemModal = useCallback(() => {
    setIsEdit(false);
    setMenuItemFormInitValue({});
    modalPopup.custom({ title: 'Add Menu Item', visible: true });
  }, []);

  const openEditMenuItemModal = useCallback(({ label, status, menu_id, link, menuitems_id, new_tab }) => {
    setIsEdit(true);
    setMenuItemFormInitValue({ label, status: status === "Active" ? 1 : 0, menu_id, link, menuitems_id, new_tab });
    modalPopup.custom({ title: 'Edit Menu Item', visible: true });
  }, []);

  const createMenuItem = useCallback((data) => {
    const menu_id = localStorage.getItem('menu_id');
    const newData = { ...data, menu_id }
    addItem({
      method: addMenuItem,
      payload: newData,
      tableRef: menuItemTableRef.current.reloadDTable,
      toaster: {
        success: 'Menu Item added successfully',
        error: 'Menu Item not added',
      },
    });
  }, []);

  const modifyMenuItem = useCallback((data) => {
    const menu_id = localStorage.getItem('menu_id');
    const newData = { ...data, menu_id }
    const menuitems_id = menuItemFormInitValue?.menuitems_id;
    updateItem({
      method: updateMenuItem,
      payload: newData,
      menuItemId: menuitems_id,
      tableRef: menuItemTableRef.current.reloadDTable,
      toaster: {
        success: 'Menu Item updated successfully',
        error: 'Menu Item not updated',
      },
    });
  }, [menuItemFormInitValue]);

  const deleteMenuItem = useCallback((id) => {
    confirmRemove(removeMenuItem, id, menuItemTableRef.current.reloadDTable, {
      confirmOptions: {
        title: 'Confirmation',
        content: 'Are you sure you want to remove this Menu Item?',
      },
      toasterOptions: {
        success: 'Menu Item removed successfully',
        error: 'Menu Item not removed',
      },
    });
  }, []);

  useEffect(() => {
    const menu_ev = localStorage.getItem('menu-ev');
    if (menu_ev?.length > 0) {
      setView(true);
    }
  }, [])

  const menuItemTable = useMemo(() => {
    MenuItemsTableSchema.toolbar.addBtnOnClick = openAddMenuItemModal;

    MenuItemsTableSchema.table.actions.edit.onClick = openEditMenuItemModal;

    MenuItemsTableSchema.table.actions.remove.onClick = deleteMenuItem;

    MenuItemsTableSchema.service.params = {
      // 'filters[page][id][$eq]': 8,
    };

    return MenuItemsTableSchema;
  });

  return (
    <div >
      <div style={{
        display: "flex",
        marginBottom: "20px"
      }}>
        <MenuSelect />
      </div>
      {view &&
        <>
          <DTable tableConfig={menuItemTable} ref={menuItemTableRef} />
          <DModal options={{ formName: 'menuItemForm' }}>
            <MenuItemsForm
              isEdit={isEdit}
              initValue={menuItemFormInitValue}
              onSubmit={isEdit ? modifyMenuItem : createMenuItem}
            />
          </DModal>
        </>
      }
    </div>
  );
};

// MenuItemsListing.propTypes = {};

export default MenuItemsListing;
