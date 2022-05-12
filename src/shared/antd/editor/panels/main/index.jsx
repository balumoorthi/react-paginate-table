import React, { useRef, useEffect } from 'react';

import { Card } from 'antd';

import { useSelector } from 'react-redux';

import modalPopup from 'shared/utils/modal';

import DModal from 'shared/antd/modal';

import { generateOptionTool } from 'shared/utils/optionsTool';

import ComponentRender from '../../render';

import ComponentPanel from '../components';

const MainPanel = () => {

  const componentRoot = useSelector(state => state.components);

  const componentSection = useRef(null);

  const showContainerPanel = () => {
    modalPopup.custom({ title: 'Components', visible: true });
  };

  useEffect(() => {
    generateOptionTool(componentSection);
  }, [componentRoot]);

  return (
    <div className="main-panel">
      <Card>
        <div className="component-section" ref={componentSection}>
          {componentRoot.components.root.children.map(comId =>
            ComponentRender(comId, componentRoot.components)
          )}
        </div>

        <div className="add-component">
          <button type="button" onClick={showContainerPanel}>
            <i className="bi bi-plus-circle-dotted" />
          </button>
        </div>

        <DModal
          options={{
            formName: 'addComponentForm',
            saveText: 'Add',
            isFooterVisible: true,
          }}
          modalProps={{
            wrapClassName: 'component-modal',
          }}
        >
          <ComponentPanel parentId="root" />
        </DModal>
      </Card>
    </div>
  );
};

export default MainPanel;
