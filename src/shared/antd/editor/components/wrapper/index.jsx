import React from 'react';

import PropTypes from 'prop-types';

import { Container as RBContainer, Row } from 'react-bootstrap';

const Wrapper = ({ options, children }) => {
  const {
    section,
    container,
    row,
    'data-id': dataId,
    'data-parent-id': dataParentid,
    'data-edit': dataEdit,
    'data-component-name': dataComponentName,
  } = options;

  return (
    <section
      {...section}
      data-id={dataId}
      data-parent-id={dataParentid}
      data-edit={dataEdit}
      data-component-name={dataComponentName}
    >
      <RBContainer {...container}>
        <Row {...row}>{children}</Row>
      </RBContainer>
    </section>
  );
};

export default Wrapper;

Wrapper.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
  options: PropTypes.objectOf(PropTypes.any).isRequired,
};
