import React from 'react';

import PropTypes from 'prop-types';

import { v4 as uuidv4 } from 'uuid';

import classNames from 'classnames';

import {
  DFieldLayoutDefaultPropTypes,
  DFieldLayoutPropTypes,
} from '../proptypes';

import Label from '../label';

import Error from '../error';

const DFieldLayout = ({ children, layoutProps }) => {
  const {
    parentContainerProps,
    containerProps,
    labelProps,
    fieldProps,
    errorProps,
    errors,
  } = layoutProps;

  const ID = uuidv4();

  return (
    <div
      className={classNames(
        containerProps?.className,
        parentContainerProps?.className
      )}
    >
      <Label
        labelProps={labelProps}
        id={ID}
        labelClassName={classNames(
          containerProps?.labelClassName,
          parentContainerProps?.labelClassName
        )}
      />
      <div
        className={classNames(
          containerProps?.fieldClassName,
          parentContainerProps.fieldClassName
        )}
      >
        {children}
      </div>
      <Error errorProps={errorProps} errors={errors} name={fieldProps.name} />
    </div>
  );
};

DFieldLayout.defaultProps = {
  layoutProps: {
    ...DFieldLayoutDefaultPropTypes,
  },
};

DFieldLayout.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
  layoutProps: PropTypes.shape(DFieldLayoutPropTypes),
};

export default DFieldLayout;
