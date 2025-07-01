import { type FormikHelpers, useFormik } from 'formik';
import { NavLink, useNavigate } from 'react-router-dom';

import type { IUserCredentials } from './model.ts';

import { Button } from '../../../components/Button';
import { BUTTON_VARIANTS } from '../../../components/Button/types.ts';
import { InputPassword } from '../../../components/InputPassword';
import { InputText } from '../../../components/InputText';
import { INPUT_TYPES } from '../../../components/InputText/types.ts';
import { RouteNames } from '../../routeNames.ts';
import { validationSchema } from './validationSchema.ts';

const initialValues: IUserCredentials = {
  email: '',
  password: '',
};

export const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (
    values: IUserCredentials,
    actions: FormikHelpers<IUserCredentials>,
  ) => {
    if (formik.isValid) {
      // todo: needs to provide authorization logic
      console.log(values);
      actions.resetForm();
      void navigate(RouteNames.REGISTRATION);
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
        Expense tracker authorization
      </h1>
      <form
        className="flex flex-col gap-y-4"
        noValidate
        onSubmit={formik.handleSubmit}
      >
        <InputText
          helperText={formik.errors.email}
          isError={
            Boolean(formik.errors.email) && Boolean(formik.touched.email)
          }
          isRequired
          label="Email"
          name="email"
          onChange={formik.handleChange}
          placeholder="Enter email"
          type={INPUT_TYPES.EMAIL}
          value={formik.values.email}
        />
        <InputPassword
          error={
            Boolean(formik.errors.password) && Boolean(formik.touched.password)
          }
          helperText={formik.errors.password}
          label="Password"
          name="password"
          onChange={formik.handleChange}
          placeholder="Enter password"
          required
          value={formik.values.password}
        />
        <Button
          additionalClasses="mt-4"
          disabled={false}
          label="Log in"
          loading={false}
          type="submit"
          variant={BUTTON_VARIANTS.CONTAINED}
        />
        <div className="flex gap-4">
          <p>Don't have an account?</p>
          <NavLink
            className="text-blue-500 transition duration-150 ease-in-out hover:underline"
            to={RouteNames.REGISTRATION}
          >
            Registration now
          </NavLink>
        </div>
      </form>
    </>
  );
};
