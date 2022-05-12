import React, { createElement } from 'react';

import { Row, Col, Image } from 'react-bootstrap';

import Section from '../components/section';

import Wrapper from '../components/wrapper';

const keysToComponentMap = {
  Row,
  Col,
  Image,
  Section,
  Wrapper,
};

const ComponentRender = (comId, rootData) => {
  // eslint-disable-next-line react/destructuring-assignment
  const { type, component, children, props } = rootData[comId];

  const elemProps = JSON.parse(JSON.stringify(props));
  elemProps.defaultForm = true;

  if (type !== 'component') {
    return createElement(
      keysToComponentMap[component],
      { ...elemProps, key: comId },
      children &&
        (typeof children === 'string'
          ? children
          : children.map(c => ComponentRender(c, rootData)))
    );
  }
  return <div className="component-container" key={comId} />;
};

export default ComponentRender;
