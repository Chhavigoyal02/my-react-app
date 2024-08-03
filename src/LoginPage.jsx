// LoginPage.jsx
import React from "react";
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import HomePageArrow from './HomePageArrow.jsx';
import * as Yup from 'yup';
import Input from './Input';

const LoginPage = () => {
  const schema = Yup.object().shape({
    email: Yup.string().email("Email is required").required(),
    password: Yup.string().min(8, "Password must be at least 8 characters").required(),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const callLoginApi = (values) => {
    console.log("sending data..", values.email, values.password);
  };

  return (
    <>
      <HomePageArrow />
      <div className="flex flex-col items-center justify-center bg-gray-100 px-4 sm:px-6">
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={callLoginApi}
        >
          {({ isValid, dirty }) => (
            <Form className="bg-white p-6 rounded-lg shadow-md max-w-sm w-full sm:max-w-md">
              <div className="flex justify-center mb-6">
                <h1 className="text-3xl font-semibold text-primary-default">Welcome Back</h1>
              </div>
              <Input
                label="Email"
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                autoComplete="email"
                required
              />
              <Input
                label="Password"
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                autoComplete="current-password"
                required
              />
              <button
                type="submit"
                className="w-full h-12 bg-primary-default text-white hover:bg-primary-dark text-lg font-medium rounded-md disabled:bg-primary-light"
                disabled={!isValid || !dirty}
              >
                LOGIN
              </button>
              <div className="flex justify-between mt-4">
                <Link to="/forgotpassword/" className="text-sm text-primary-dark underline">Forgot Password?</Link>
                <p className="text-sm">
                  Don't have an account? <Link to="/signup/" className="text-primary-dark underline">Sign Up</Link>
                </p>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default React.memo(LoginPage);
