import PropTypes from 'prop-types';

const DInputDefaultPropTypes = {
  fieldProps: {},
  control: {},
};

const DInputPropTypes = {
  fieldProps: PropTypes.objectOf(PropTypes.any),
  control: PropTypes.objectOf(PropTypes.any),
};

const DFieldLayoutDefaultPropTypes = {
  containerProps: {},
  labelProps: {},
  fieldProps: {},
  errorProps: {},
  errors: {},
  register: () => {},
};

const DFieldLayoutPropTypes = {
  containerProps: PropTypes.objectOf(PropTypes.any),
  labelProps: PropTypes.objectOf(PropTypes.any),
  fieldProps: PropTypes.objectOf(PropTypes.any),
  errorProps: PropTypes.objectOf(PropTypes.any),
  errors: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.objectOf(PropTypes.any),
  ]),
  register: PropTypes.func,
};

export {
  DInputDefaultPropTypes,
  DInputPropTypes,
  DFieldLayoutDefaultPropTypes,
  DFieldLayoutPropTypes,
};
