import * as yup from 'yup';

const MenuSchema = yup.object({
  title: yup.string().required('This field required'),
  status: yup.mixed().required('This field required'),
});

export default MenuSchema;
