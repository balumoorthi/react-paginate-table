import React, { useState } from 'react';

import { Radio, Button } from 'antd';

import componentList from 'assets/data/components';

import modalPopup from 'shared/utils/modal';

import PropTypes from 'prop-types';

import PropSection from './PropSection';

const ComponentPanel = ({ parentId }) => {
  const formProps = {
    fieldProps: { id: 'addComponentForm', className: 'row' },
    containerProps: {
      className: 'col-md-6 mb-3',
      labelClassName: 'label',
    },
  };

  const [componentType, setComponentType] = useState();

  const [componentProps, setComponentProps] = useState();

  const setFormProps = compName => {
    componentList[compName.label].props.initialValues = {};
    componentList[compName.label].props.formProps = formProps;
  };

  const onComponentChange = e => {
    const compName = e.target.value;
    setComponentType(compName);
    setFormProps(compName);
    setComponentProps(componentList[compName.label].props);
  };

  return (
    <div className="add-component-icon-wrapper">
      <div className="component-section">
        <Radio.Group onChange={onComponentChange} value={componentType}>
          {Object.keys(componentList).map(key => {
            const clField = componentList[key];
            return (
              <Radio value={clField.component} key={clField.id}>
                <img src={clField.component.icon} alt="component-img" />
                <span className="check-square" />
              </Radio>
            );
          })}
        </Radio.Group>
      </div>
      <div className="props-section">
        {componentType ? (
          <>
            <PropSection
              componentProps={componentProps}
              componentType={componentType}
              parentId={parentId}
            />
            <div className="btn-section">
              <Button
                type="secondary"
                onClick={() => {
                  modalPopup.toggle(false);
                }}
              >
                Cancel
              </Button>
              <button
                className="ant-btn ant-btn-primary"
                type="submit"
                form="addComponentForm"
              >
                Add
              </button>
            </div>
          </>
        ) : (
          <p className="empty">Please select component</p>
        )}
      </div>
    </div>
  );
};

ComponentPanel.propTypes = {
  parentId: PropTypes.string.isRequired,
};

export default ComponentPanel;
