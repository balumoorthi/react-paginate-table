import * as yup from 'yup';

const ColSchema = yup.object({
  className: yup.string().required().nullable(),
  id: yup.string(),
});

export default ColSchema;
