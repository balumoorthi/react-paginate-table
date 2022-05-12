import React from 'react';

import PropTypes from 'prop-types';

import { v4 as uuidv4 } from 'uuid';

import { Tabs } from 'antd';

const { TabPane } = Tabs;

const DTab = ({ tabProps, options }) => (
  <Tabs defaultActiveKey="1" {...tabProps}>
    {options &&
      options.map(item => (
        <TabPane tab={item.title} key={uuidv4()}>
          {item.content}
        </TabPane>
      ))}
  </Tabs>
);

DTab.defaultProps = {
  tabProps: {},
  options: [],
};

DTab.propTypes = {
  tabProps: PropTypes.objectOf(PropTypes.any),
  options: PropTypes.arrayOf(PropTypes.any),
};

export default DTab;
