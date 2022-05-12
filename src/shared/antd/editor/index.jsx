import React from 'react';
// import PropTypes from 'prop-types';

import { Row, Col } from 'antd';

import MainPanel from './panels/main';

import PropsPanel from './panels/props';

const DEditor = () => {
  return (
    <div className="panel-section">
      <Row gutter={16}>
        <Col className="gutter-row" span={18}>
          <MainPanel />
        </Col>
        <Col className="gutter-row" span={6}>
          <PropsPanel />
        </Col>
      </Row>
    </div>
  );
};

// DEditor.propTypes = {};

export default DEditor;
