import React from 'react';

import { Card, Button } from 'antd';

import componentList from 'assets/data/components';

import { useSelector } from 'react-redux';

import DFormObj from 'shared/core/form/DFormObj';

const PropsPanel = () => {

  const componentInfo = useSelector(state => state.optionsTool.componentInfo);

  const componentProps = useSelector(state => state.components.components);

  const { label: comLabel, id: comId, name: comName } = componentInfo;

  const formProps = {
    fieldProps: {
      id: 'propsForm',
      className: 'row',
    },
    containerProps: {
      className: 'col-md-6 mb-3',
      labelClassName: 'label',
    },
  };

  if (comLabel) {
    // console.log(componentProps[comId]?.props?.options, 'componentProps');

    componentList[comLabel].props.formProps = formProps;
    componentList[comLabel].props.initialValues =
      componentProps[comId]?.props?.options;
  }

  return (
    <div className="props-panel">
      <Card>
        <h2>{comName}</h2>

        {comLabel ? (
          <DFormObj
            options={componentList[comLabel].props}
            // onSubmit={data => {
            //   console.log(data);
            // }}
            resetForm
          />
        ) : (
          <div className="empty-component">
            <i className="bi bi-inbox" />
            <p>Please select component to edit</p>
          </div>
        )}

        <div className="props-btn-section">
          <div className="action-btn">
            <button
              type="button"
              className="trash"
              title="Remove Component"
              disabled={comId ? '' : 'disabled'}
            >
              <i className="bi bi-trash" />
            </button>
            <button
              type="button"
              className="add"
              title="Add Component"
              disabled={comId ? '' : 'disabled'}
            >
              <i className="bi bi-plus-square" />
            </button>
          </div>
          <div className="save-btn">
            <Button type="secondary" htmlType="submit" form="propsForm">
              Save
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PropsPanel;
