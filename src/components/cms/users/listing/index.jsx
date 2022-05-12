import React, { useState, useMemo, useCallback, useRef } from 'react';

// import PropTypes from 'prop-types';

import DTable from 'shared/core/datatable/index';

import DModal from 'shared/antd/modal';

import modalPopup from 'shared/utils/modal';

import { confirmRemove, addItem, updateItem } from 'shared/utils/response';

import { removeUsers, addUsers, updateUsers } from 'services/cms/users';

import UsersForm from '../form';

import UserTableSchema from './schema';

const UsersListing = () => {

  const [isEdit, setIsEdit] = useState(false);

  const [userFormInitValue, setUserFormInitValue] = useState({});

  const userTableRef = useRef();

  const openAddUser = useCallback(() => {
    setIsEdit(false);
    setUserFormInitValue({});
    modalPopup.custom({ title: 'Add User', visible: true });
  }, []);

  const openEditUser = useCallback(({ name, email_address, user_id, UserProjectMapping, status }) => {
    const project_id = UserProjectMapping.map((project) => {
      return project.project_id
    })
    setIsEdit(true);
    setUserFormInitValue({ name, email_address, user_id, project_id, status: status === "Active" ? 1 : 0 });
    modalPopup.custom({ title: 'Edit User', visible: true });
  }, []);

  const addUser = useCallback(data => {
    const role_id = "2"
    const test = { ...data, role_id };
    addItem({
      method: addUsers,
      payload: test,
      tableRef: userTableRef.current.reloadDTable,
      toaster: {
        success: 'User added successfully',
        error: 'User not added',
      },
    });
  }, []);

  const updateUser = useCallback(data => {
    const user_id = userFormInitValue?.user_id;
    updateItem({
      method: updateUsers,
      payload: data,
      usId: user_id,
      tableRef: userTableRef.current.reloadDTable,
      toaster: {
        success: 'User updated successfully',
        error: 'User not updated',
      },
    });
  }, [userFormInitValue]);

  const removeUser = useCallback((id) => {
    confirmRemove(removeUsers, id, userTableRef.current.reloadDTable, {
      confirmOptions: {
        title: 'Confirmation',
        content: 'Are you sure you want to remove this user?',
      },
      toasterOptions: {
        success: 'User removed successfully',
        error: 'User not removed',
      },
    });
  }, [userFormInitValue]);

  // user table crud end

  const userTable = useMemo(() => {
    UserTableSchema.toolbar.addBtnOnClick = openAddUser;

    UserTableSchema.table.actions.edit.onClick = openEditUser;

    UserTableSchema.table.actions.remove.onClick = removeUser;

    return UserTableSchema;
  });

  return (
    <>
      <DTable tableConfig={userTable} ref={userTableRef} />
      <DModal options={{ formName: 'userForm' }}>
        <UsersForm
          isEdit={isEdit}
          initValue={userFormInitValue}
          onSubmit={isEdit ? updateUser : addUser}
        />
      </DModal>
    </>
  );
};

// User.propTypes = {};

export default UsersListing;
