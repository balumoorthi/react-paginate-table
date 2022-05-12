import * as yup from 'yup';

const ProjectSchema = yup.object({
  project_name: yup.string().required('This field required'),
  description: yup.string().required('This field required'),
  status: yup.mixed().required('This field required'),
});

export default ProjectSchema;
