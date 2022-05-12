import * as yup from 'yup';

const ProjectSchema = yup.object({
  projects: yup.mixed(),
});

export default ProjectSchema;
