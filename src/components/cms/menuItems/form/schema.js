import * as yup from 'yup';

const MenuItemsSchema = yup.object({
  label: yup.string().required('This field required'),
  link: yup.string().required('This field required'),
  status: yup.mixed().required('This field required'),
  new_tab: yup.string().required('This field required'),
});

export default MenuItemsSchema;
