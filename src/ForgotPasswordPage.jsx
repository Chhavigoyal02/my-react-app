import React from "react";
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import HomePageArrow from './HomePageArrow.jsx';
import * as Yup from 'yup';
import FormikInput from './FormikInput';

const ForgotPasswordPage = () => {
  const schema = Yup.object().shape({
    email: Yup.string().email("Invalid email format").required(),
  });

  const initialValues = {
    email: "",
  };

  const requestPasswordReset = (values) => {
    console.log("Requesting password reset for:", values.email);
  };

  return (
    <>
      <HomePageArrow />
      <div className="flex flex-col items-center justify-center bg-gray-100 px-4 sm:px-6">
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={requestPasswordReset}
        >
          {({ isValid, dirty }) => (
            <Form className="bg-white p-6 rounded-lg shadow-md max-w-sm w-full sm:max-w-md">
              <div className="flex justify-center mb-6">
                <h1 className="text-3xl font-semibold text-primary-default">Forgot Password</h1>
              </div>
              <FormikInput
                label="Email"
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                required
              />
              <button
                type="submit"
                className="w-full h-12 bg-primary-default text-white hover:bg-primary-dark text-lg font-medium rounded-md disabled:bg-primary-light"
                disabled={!isValid || !dirty}
              >
                Request Password Reset
              </button>
              <div className="flex justify-center mt-4">
                <Link to="/login/" className="text-sm text-primary-dark underline">Back to Login</Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default React.memo(ForgotPasswordPage);
