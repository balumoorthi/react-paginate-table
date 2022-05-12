import React from 'react';

import Col from './col';
import Container from './container';

const DemoForm = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Col componentType="col" />
            <button
              className="ant-btn ant-btn-primary"
              type="submit"
              form="addComponentForm"
            >
              submit Col
            </button>
          </div>
          <div className="col-md-6">
            <Container componentType="container" />
            <button
              className="ant-btn ant-btn-primary"
              type="submit"
              form="addConComponentForm"
            >
              submit Container
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoForm;
