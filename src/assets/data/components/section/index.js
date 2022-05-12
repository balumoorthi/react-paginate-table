import sectionImage from 'assets/images/components/section.svg';

import SectionSchema from './schema';

const col = {
  id: 'section',

  component: {
    label: 'section',
    name: 'Section',
    icon: sectionImage,
    type: 'layout',
  },

  props: {
    schema: SectionSchema,

    initialValues: {},

    fields: {
      className: {
        type: 'Input',
        props: {
          fieldProps: { type: 'text', name: 'className' },
          labelProps: { name: 'Class' },
        },
      },
      id: {
        type: 'Input',
        props: {
          fieldProps: { type: 'text', name: 'id' },
          labelProps: { name: 'id' },
        },
      },
    },
  },
};

export default col;
