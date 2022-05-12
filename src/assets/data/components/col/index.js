import colImage from 'assets/images/components/col.svg';

import ColSchema from './schema';

const col = {
  id: 'col',

  component: {
    label: 'col',
    name: 'Col',
    icon: colImage,
    type: 'layout',
  },

  props: {
    schema: ColSchema,

    initialValues: {},

    fields: {
      lg: {
        type: 'InputNumber',
        props: {
          fieldProps: { name: 'lg', min: 1, max: 12 },
          labelProps: { name: 'lg' },
        },
      },
      md: {
        type: 'InputNumber',
        props: {
          fieldProps: { name: 'md', min: 1, max: 12 },
          labelProps: { name: 'md' },
        },
      },
      sm: {
        type: 'InputNumber',
        props: {
          fieldProps: { name: 'sm', min: 1, max: 12 },
          labelProps: { name: 'sm' },
        },
      },
      xl: {
        type: 'InputNumber',
        props: {
          fieldProps: { name: 'xl', min: 1, max: 12 },
          labelProps: { name: 'xl' },
        },
      },
      xs: {
        type: 'InputNumber',
        props: {
          fieldProps: { name: 'xs', min: 1, max: 12 },
          labelProps: { name: 'xs' },
        },
      },
      xxl: {
        type: 'InputNumber',
        props: {
          fieldProps: { name: 'xxl', min: 1, max: 12 },
          labelProps: { name: 'xxl' },
        },
      },
      as: {
        type: 'InputNumber',
        props: {
          fieldProps: { name: 'as', min: 1, max: 12 },
          labelProps: { name: 'as' },
        },
      },
      bsPrefix: {
        type: 'InputNumber',
        props: {
          fieldProps: { name: 'bsPrefix', min: 1, max: 12 },
          labelProps: { name: 'bsPrefix' },
        },
      },
    },
  },
};

export default col;
