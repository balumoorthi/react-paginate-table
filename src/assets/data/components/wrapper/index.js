import sectionImage from 'assets/images/components/section.svg';

import WrapperSchema from './schema';

const wrapper = {
  id: 'Wrapper',

  component: {
    label: 'wrapper',
    name: 'Wrapper',
    icon: sectionImage,
    type: 'layout',
  },

  props: {
    schema: WrapperSchema,

    initialValues: {},

    fields: {
      sectionClassName: {
        type: 'Input',
        props: {
          fieldProps: { type: 'text', name: 'section.className' },
          labelProps: { name: 'Section Class' },
        },
      },
      sectionId: {
        type: 'Input',
        props: {
          fieldProps: { type: 'text', name: 'section.id' },
          labelProps: { name: 'Section Id' },
        },
      },
      containerClassName: {
        type: 'Input',
        props: {
          fieldProps: { type: 'text', name: 'container.className' },
          labelProps: { name: 'Container Class' },
        },
      },
      containerPropsId: {
        type: 'Input',
        props: {
          fieldProps: { type: 'text', name: 'container.id' },
          labelProps: { name: 'Container Id' },
        },
      },
      rowClassName: {
        type: 'Input',
        props: {
          fieldProps: { type: 'text', name: 'row.className' },
          labelProps: { name: 'Row Class' },
        },
      },
      rowId: {
        type: 'Input',
        props: {
          fieldProps: { type: 'text', name: 'row.id' },
          labelProps: { name: 'Row Id' },
        },
      },
    },
  },
};

export default wrapper;
