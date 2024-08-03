// SignupPage.jsx
import React from "react";
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import HomePageArrow from './HomePageArrow.jsx';
import * as Yup from 'yup';
import Input from './Input';

const SignupPage = () => {
  const schema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email format").required(),
    password: Yup.string().min(8, "Password must be at least 8 characters").required(),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], "Passwords must match").required(),
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  const callSignupApi = (values) => {
    console.log("sending data..", values);
  };

  return (
    <>
      <HomePageArrow />
      <div className="flex flex-col items-center justify-center bg-gray-100 px-4 sm:px-0">
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={callSignupApi}
        >
          {({ isValid, dirty }) => (
            <Form className="bg-white p-6 rounded-lg shadow-md max-w-md w-full sm:w-[500px]">
              <div className="flex justify-center mb-6">
                <h1 className="text-3xl font-semibold text-primary-default">Create Account</h1>
              </div>
              <Input
                label="First Name"
                id="firstName"
                name="firstName"
                type="text"
                placeholder="First Name"
                required
              />
              <Input
                label="Last Name"
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Last Name"
                required
              />
              <Input
                label="Email"
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                required
              />
              <Input
                label="Password"
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                required
              />
              <Input
                label="Confirm Password"
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                required
              />
              <button
                type="submit"
                className="w-full h-12 bg-primary-default text-white hover:bg-primary-dark text-lg font-medium rounded-md disabled:bg-primary-light"
                disabled={!isValid || !dirty}
              >
                Sign Up
              </button>
              <div className="flex justify-between mt-4">
                <p className="text-sm">
                  Already have an account? <Link to="/login/" className="text-primary-dark underline">Login</Link>
                </p>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default React.memo(SignupPage);
