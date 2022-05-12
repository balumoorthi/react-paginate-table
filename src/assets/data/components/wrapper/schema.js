import * as yup from 'yup';

const WrapperSchema = yup.object({
  section: yup.object().shape({
    className: yup.string().required(),
    id: yup.string(),
  }),
  container: yup.object().shape({
    className: yup.string().required(),
    id: yup.string(),
  }),
  row: yup.object().shape({
    className: yup.string().required(),
    id: yup.string(),
  }),
});

export default WrapperSchema;
