import React from 'react';

import PropTypes from 'prop-types';

import { Modal, Button } from 'antd';

import { useSelector } from 'react-redux';

import modalPopup from 'shared/utils/modal';

const DModal = ({ options, children, modalProps, show }) => {
  const mpd = useSelector(state => state.modal);

  let modalFooter = '';

  if (options?.isFooterVisible) {
    modalFooter = <div />;
  } else if (show === true) {
    modalFooter = <div />;
  } else {
    modalFooter = [
      <Button
        key="back"
        type="secondary"
        onClick={() => {
          modalPopup.toggle(false);
        }}
      >
        Cancel
      </Button>,
      <Button
        key="submit"
        type="primary"
        htmlType="submit"
        form={options?.formName}
      >
        {options && options.saveText ? options.saveText : 'Submit'}
      </Button>,
    ];
  }

  return (
    <Modal
      destroyOnClose
      onCancel={() => {
        modalPopup.toggle(false);
      }}
      footer={modalFooter}
      {...modalProps}
      {...mpd}
    >
      {children}
    </Modal>
  );
};

DModal.defaultProps = {
  modalProps: {},
};

DModal.propTypes = {
  options: PropTypes.objectOf(PropTypes.any).isRequired,
  children: PropTypes.objectOf(PropTypes.any).isRequired,
  modalProps: PropTypes.objectOf(PropTypes.any),
  show: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default DModal;
