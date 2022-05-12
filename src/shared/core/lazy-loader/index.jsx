import React, { Suspense } from 'react';

const DLoader = () => (
  <div className="lds-roller-wrapper">
    <div className="lds-roller">
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
);

// eslint-disable-next-line react/display-name
const DLoadable = Component => props =>
  (
    <Suspense fallback={<DLoader />}>
      <Component {...props} />
    </Suspense>
  );

export default DLoadable;
