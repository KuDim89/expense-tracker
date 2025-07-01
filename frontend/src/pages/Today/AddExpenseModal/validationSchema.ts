import * as yup from 'yup';

export const validationSchema = yup.object({
  category: yup.string(),
  cost: yup
    .number()
    .transform((_value: number, originalValue: string) => {
      const parsed = parseFloat(originalValue);
      return isNaN(parsed) ? NaN : parsed;
    })
    .typeError('Cost must be a valid number')
    .required('Cost is required')
    .min(0, 'Cost must be at least 0'),
  date: yup.string().trim().required('Date is required'),
  expenseName: yup
    .string()
    .min(3, 'Expense name must contain 2 or more characters')
    .required('Expense name is required'),
});
