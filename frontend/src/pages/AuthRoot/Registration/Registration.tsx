import { type FormikHelpers, useFormik } from 'formik';
import { NavLink } from 'react-router-dom';

import type { IRegistrationData } from './model.ts';

import { Button } from '../../../components/Button';
import {
  BUTTON_TYPES,
  BUTTON_VARIANTS,
} from '../../../components/Button/types.ts';
import { InputPassword } from '../../../components/InputPassword';
import { InputText } from '../../../components/InputText';
import { INPUT_TYPES } from '../../../components/InputText/types.ts';
import { RouteNames } from '../../routeNames.ts';
import { validationSchema } from './validationSchema.ts';

const initialValues: IRegistrationData = {
  confirmPassword: '',
  email: '',
  firstName: '',
  lastName: '',
  password: '',
};

export const Registration = () => {
  const handleSubmit = (
    values: IRegistrationData,
    actions: FormikHelpers<IRegistrationData>,
  ) => {
    if (formik.isValid) {
      // todo: needs to provide registration logic
      console.log('Valid registration form', values);
      actions.resetForm();
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
    validationSchema,
  });

  return (
    <>
      <h1 className="mb-6 text-center text-2xl text-blue-500">
        Expense tracker registration
      </h1>
      <form
        className="grid grid-cols-2 items-start gap-4"
        noValidate={true}
        onSubmit={formik.handleSubmit}
      >
        <InputText
          error={
            Boolean(formik.errors.firstName) &&
            Boolean(formik.touched.firstName)
          }
          helperText={formik.errors.firstName}
          label="First name"
          name="firstName"
          onChange={formik.handleChange}
          placeholder="First name"
          required
          type={INPUT_TYPES.TEXT}
          value={formik.values.firstName}
        />
        <InputText
          error={
            Boolean(formik.errors.lastName) && Boolean(formik.touched.lastName)
          }
          helperText={formik.errors.lastName}
          label="Last name"
          name="lastName"
          onChange={formik.handleChange}
          placeholder="Last name"
          required
          type={INPUT_TYPES.TEXT}
          value={formik.values.lastName}
        />
        <InputText
          additionalClasses="col-span-2"
          error={Boolean(formik.errors.email) && Boolean(formik.touched.email)}
          helperText={formik.errors.email}
          label="Email"
          name="email"
          onChange={formik.handleChange}
          placeholder="Email"
          type={INPUT_TYPES.EMAIL}
          value={formik.values.email}
        />
        <InputPassword
          additionalClasses="col-span-2"
          error={
            Boolean(formik.errors.password) && Boolean(formik.touched.password)
          }
          helperText="Error password"
          label="Password"
          name="password"
          onChange={formik.handleChange}
          placeholder="Password"
          value={formik.values.password}
        />
        <InputPassword
          additionalClasses="col-span-2"
          error={
            Boolean(formik.errors.confirmPassword) &&
            Boolean(formik.touched.confirmPassword)
          }
          helperText={formik.errors.confirmPassword}
          label="Confirm Password"
          name="confirmPassword"
          onChange={formik.handleChange}
          placeholder="Confirm password"
          required
          value={formik.values.confirmPassword}
        />
        <div className="col-span-2 flex flex-col">
          <Button
            additionalClasses="mt-4"
            // disabled={true}
            label="Sign up"
            type={BUTTON_TYPES.SUBMIT}
            // loading={true}
            variant={BUTTON_VARIANTS.CONTAINED}
          />
        </div>
        <div className="col-span-2 flex gap-4">
          <p>Do you have an account?</p>
          <NavLink
            className="text-blue-500 transition duration-150 ease-in-out hover:underline"
            to={RouteNames.LOGIN}
          >
            Authorization now
          </NavLink>
        </div>
      </form>
    </>
  );
};
