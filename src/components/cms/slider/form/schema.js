import * as yup from 'yup';

const SliderSchema = yup.object({
  title: yup.string().required('This field required'),
  status: yup.mixed().required('This field required'),
});

export default SliderSchema;
