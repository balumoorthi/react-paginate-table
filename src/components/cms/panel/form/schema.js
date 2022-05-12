import * as yup from 'yup';

const PanelSchema = yup.object({
  label: yup.string().required('This field required'),
  content: yup.string().required('This field required'),
  status: yup.mixed().required('This field required'),
  // order_id: yup.mixed().required('This field required'),
});

export default PanelSchema;
