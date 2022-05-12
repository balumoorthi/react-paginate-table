import * as yup from 'yup';

const ColSchema = yup.object({
  lg: yup.string().required().nullable(),
  md: yup.string(),
  sm: yup.string(),
  xl: yup.string(),
  xs: yup.string(),
  xxl: yup.string(),
  as: yup.string(),
  bsPrefix: yup.string(),
});

export default ColSchema;
