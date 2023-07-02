import * as yup from 'yup';

export const transactionValidationSchema = yup.object().shape({
  amount: yup.number().integer().required(),
  organization_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
