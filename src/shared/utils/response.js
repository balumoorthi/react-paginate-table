import { Modal } from 'antd';

import { toast } from 'react-toastify';

import modalPopup from './modal';

const { confirm } = Modal;

const confirmRemove = (method, id, reloadTable, config) => {
  const { confirmOptions, toasterOptions } = config;

  const conOptions = {
    title:
      confirmOptions && confirmOptions.title
        ? confirmOptions.title
        : 'Confirmation',
    content:
      confirmOptions && confirmOptions.content
        ? confirmOptions.content
        : 'Are you sure you want to proceed?',
    okText: 'Yes',
    okType: 'danger',
    cancelText: 'No',
    async onOk() {
      const res = await method(id);

      if (res && res.data) {
        reloadTable();
        toast.success(toasterOptions?.success);
      } else {
        toast.error(toasterOptions?.error);
      }
    },
    onCancel() {},
  };

  confirm(conOptions);
};

const addItem = async ({ method, payload, tableRef, toaster }) => {
  try {
    const res = await method(payload);

    if (res && res.data) {
      modalPopup.toggle(false);
      tableRef();
      toast.success(toaster?.success);
    } else {
      toast.error(toaster?.error);
    }

    return res;
  } catch (err) {
    toast.error(toaster?.error);
    return err;
  }
};

const updateItem = async ({ method, payload, usId, projId, pageId, menuId, menuItemId, accordionId, panelId, sliderId, tableRef, toaster }) => {
const id = usId || projId || pageId || menuId || menuItemId || accordionId || panelId || sliderId;

  try {
    const res = await method(payload, id);

    if (res && res.data) {
      modalPopup.toggle(false);
      tableRef();
      toast.success(toaster?.success);
    } else {
      toast.error(toaster?.error);
    }

    return res;
  } catch (err) {
    return err;
  }
};

export { confirmRemove, addItem, updateItem };
