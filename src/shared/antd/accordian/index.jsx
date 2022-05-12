import React from 'react';

import PropTypes from 'prop-types';

import { v4 as uuidv4 } from 'uuid';

import { Collapse } from 'antd';

const { Panel } = Collapse;

const DAccordian = ({ accordianProps, options }) => (
  <Collapse defaultActiveKey="1" {...accordianProps}>
    {options &&
      options.map(item => (
        <Panel header={item.title} key={uuidv4()}>
          {item.content}
        </Panel>
      ))}
  </Collapse>
);

DAccordian.defaultProps = {
  accordianProps: {},
  options: [],
};

DAccordian.propTypes = {
  accordianProps: PropTypes.objectOf(PropTypes.any),
  options: PropTypes.arrayOf(PropTypes.any),
};

export default DAccordian;
