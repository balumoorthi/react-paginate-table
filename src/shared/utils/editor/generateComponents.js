import appStore from 'shared/store';

import { v4 as uuidv4 } from 'uuid';

import { addComponent } from 'shared/store/reducers/editor';

import modalPopup from '../modal';

const generateComponent = (props, componentType, parentId) => {
  const componentProps = props;

  const id = uuidv4();

  componentProps.options['data-id'] = id;
  componentProps.options['data-parent-id'] = parentId;
  componentProps.options['data-component-name'] = componentType.name;

  if (componentType.type === 'layout')
    componentProps.options['data-edit'] = true;

  const componentDetails = {
    id,
    props: componentProps,
    children: [],
    type: componentType.type,
    component: componentType.name,
    parent: parentId,
  };

  const addComponentResponse = appStore.dispatch(
    addComponent(componentDetails)
  );

  if (addComponentResponse) {
    modalPopup.toggle(false);
  }
};

export default generateComponent;
