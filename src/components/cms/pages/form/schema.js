import * as yup from 'yup';

const PageSchema = yup.object({
  title: yup.string().required('This field required'),
  content: yup.string().required('This field required'),
  slug: yup.string().required('This field required'),
  status: yup.mixed().required('This field required'),
});

export default PageSchema;
