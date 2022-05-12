import * as yup from 'yup';

const UsersSchema = {
  name: yup.string().required('This field required'),
  email_address: yup.string().email().required('This field required'),
  project_name: yup.mixed(),
  project_id: yup.array(),
  status: yup.mixed().required('This field required'),
};

const { name, project_id } = UsersSchema;

const UsersAddSchema = yup.object(UsersSchema);

const UsersUpdateSchema = yup.object({ name, project_id});

export { UsersAddSchema, UsersUpdateSchema };
