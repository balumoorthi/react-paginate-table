/* eslint-disable no-param-reassign */
import appStore from 'shared/store';

import { setComponent } from 'shared/store/reducers/options-tool';

const optsTool = {
  setSelectedComponent: component => {
    appStore.dispatch(setComponent(component));
  },
  getSelectedComponent: () => appStore.getState().optionsTool.selectedComponent,
};

const setOptionsTool = elem => {
  const optionTool = document.querySelector('.options-tool');

  const containerName = document.querySelector(
    '.options-tool .container-name span'
  );

  if (elem) {
    const elemProps = elem.getBoundingClientRect();

    optionTool.setAttribute(
      'style',
      `top : ${elemProps.top}px; 
      left : ${elemProps.left}px; 
      height : ${elemProps.height}px; 
      width : ${elemProps.width}px; 
      display : block; `
    );

    containerName.innerHTML = elem.dataset.componentName;
  } else {
    optionTool.removeAttribute('style');
  }
};

const resizeOptionTool = () => {
  setOptionsTool(optsTool.getSelectedComponent());
};

const setListener = (antdLayout, componentWrapper) => {
  window.addEventListener('resize', resizeOptionTool);
  antdLayout.addEventListener('scroll', resizeOptionTool);
  componentWrapper.addEventListener('scroll', resizeOptionTool);
};

const removeListener = (antdLayout, componentWrapper) => {
  window.removeEventListener('resize', resizeOptionTool);
  antdLayout.removeEventListener('scroll', resizeOptionTool);
  componentWrapper.removeEventListener('scroll', resizeOptionTool);
};

const generateOptionTool = componentSection => {
  if (componentSection && componentSection.current) {
    const elems =
      componentSection.current.querySelectorAll('[data-edit="true"]');

    const mainElem = document.querySelector('.main-panel');
    const antdLayout = document.querySelector('.ant-layout-content');
    const componentWrapper = document.querySelector('.component-section');

    elems.forEach(elem => {
      elem.onclick = ev => {
        ev.preventDefault();
        ev.stopPropagation();
        setOptionsTool(elem);
        setListener(antdLayout, componentWrapper);
        optsTool.setSelectedComponent(elem);
      };
    });

    mainElem.onclick = ev => {
      ev.preventDefault();
      removeListener(antdLayout, componentWrapper);
      setOptionsTool();
      optsTool.setSelectedComponent('');
    };
  }
};

export { optsTool, generateOptionTool };
