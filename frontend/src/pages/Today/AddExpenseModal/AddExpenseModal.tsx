import type { FC } from 'react';

import { XMarkIcon } from '@heroicons/react/24/outline';
import { type FormikHelpers, useFormik } from 'formik';

import type { IAddExpense } from './model.ts';
import type { AddExpenseModalProps } from './types.ts';

import { Button } from '../../../components/Button';
import {
  BUTTON_TYPES,
  BUTTON_VARIANTS,
} from '../../../components/Button/types.ts';
import { ButtonIcon } from '../../../components/ButtonIcon';
import { DatePicker } from '../../../components/DatePicker';
import { InputNumber } from '../../../components/InputNumber';
import { InputText } from '../../../components/InputText';
import { INPUT_TYPES } from '../../../components/InputText/types.ts';
import { Select } from '../../../components/Select';
import useCalendarStore from '../../../stores/CalendarStore/useCalendarStore.ts';
import { validationSchema } from './validationSchema.ts';

export const AddExpenseModal: FC<AddExpenseModalProps> = ({
  isOpen,
  toggleModal,
}) => {
  const { selectedDate } = useCalendarStore();

  const initialValues: IAddExpense = {
    category: '',
    cost: '',
    date: selectedDate,
    expenseName: '',
  };

  const handleSubmit = (
    values: IAddExpense,
    actions: FormikHelpers<IAddExpense>,
  ) => {
    if (formik.isValid) {
      // todo: needs to provide authorization logic
      console.log(values);
      actions.resetForm();
    }
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    onSubmit: handleSubmit,
    validationSchema,
  });

  const closeModal = () => {
    toggleModal(!isOpen);
    formik.resetForm();
  };

  const options = [
    {
      hint: "Rent, mortgage, property taxes, homeowners' insurance, maintenance.",
      id: '1',
      name: 'Housing',
      value: 'housing',
    },
    {
      hint: 'Groceries, dining out.',
      id: '2',
      name: 'Food',
      value: 'food',
    },
    {
      hint: 'Car payments, gas, public transport, maintenance, insurance.',
      id: '3',
      name: 'Transportation',
      value: 'transportation',
    },
    {
      hint: 'Electricity, water, gas, internet, phone.',
      id: '4',
      name: 'Utilities',
      value: 'utilities',
    },
    {
      hint: 'Medical, dental, prescriptions.',
      id: '5',
      name: 'Healthcare',
      value: 'healthcare',
    },
    {
      hint: 'Haircuts, toiletries, clothing.',
      id: '6',
      name: 'Personal Care',
      value: 'personalCare',
    },
    {
      hint: 'Movies, concerts, hobbies, travel.',
      id: '7',
      name: 'Entertainment',
      value: 'entertainment',
    },
    {
      hint: 'Loans, credit cards.',
      id: '8',
      name: 'Debt Payments',
      value: 'debtPayments',
    },
    {
      hint: 'Retirement, savings accounts, investment accounts.',
      id: '9',
      name: 'Savings and Investments',
      value: 'savingsAndInvestments',
    },
  ];

  return (
    <div
      className={`fixed inset-0 z-10 flex min-h-full w-screen items-center justify-center overflow-y-auto duration-300 ${isOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}
    >
      <div
        className={`${isOpen ? 'bg-expand-center' : 'bg-hide-center'} fixed inset-0`}
        onClick={closeModal}
      ></div>
      <div
        className={`${isOpen ? 'animate-zoom-in' : 'animate-zoom-out'} relative w-1/4 rounded-lg bg-white p-8 text-left shadow-xl`}
      >
        <ButtonIcon
          additionalClasses="absolute right-3 top-3 p-1 hover:text-blue-600 bg-transparent hover:bg-gray-50 rounded-full"
          icon={<XMarkIcon />}
          onClick={closeModal}
          sizeClasses="h-8 w-8"
        />
        <h1 className="mb-6 text-xl text-blue-500">Add Expense</h1>
        <form
          className="grid grid-cols-2 items-start gap-4"
          noValidate
          onSubmit={formik.handleSubmit}
        >
          <DatePicker
            additionalClasses="col-span-2"
            helperText={formik.errors.date}
            isDisabledFuture
            isError={
              Boolean(formik.errors.date) && Boolean(formik.touched.date)
            }
            isRequired
            label="Date"
            name="date"
            setActiveDate={(value) => void formik.setFieldValue('date', value)}
            value={formik.values.date}
          />
          <InputText
            additionalClasses="col-span-2"
            helperText={formik.errors.expenseName}
            isError={
              Boolean(formik.errors.expenseName) &&
              Boolean(formik.touched.expenseName)
            }
            isRequired
            label="Expense name"
            name="expenseName"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            placeholder="Enter expense name"
            type={INPUT_TYPES.TEXT}
            value={formik.values.expenseName}
          />
          <InputNumber
            helperText={formik.errors.cost}
            isError={
              Boolean(formik.errors.cost) && Boolean(formik.touched.cost)
            }
            isRequired
            label="Cost"
            min="0"
            name="cost"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            placeholder="Enter cost"
            step=".01"
            value={formik.values.cost}
          />
          <Select
            helperText={formik.errors.category}
            isError={
              Boolean(formik.errors.category) &&
              Boolean(formik.touched.category)
            }
            label="Category"
            name="category"
            onBlur={formik.handleBlur}
            options={options}
            placeholder="Select category"
            setActiveOption={(value) =>
              void formik.setFieldValue('category', value)
            }
            value={formik.values.category}
          />
          <div className="col-span-2 mt-6 flex justify-end gap-4">
            <Button
              additionalClasses="px-3"
              label="Close"
              onClick={closeModal}
              type={BUTTON_TYPES.BUTTON}
              variant={BUTTON_VARIANTS.OUTLINED}
            />
            <Button
              additionalClasses="col-span-1"
              label="Add"
              type={BUTTON_TYPES.SUBMIT}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
