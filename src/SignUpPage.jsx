import React from "react";
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import HomePageArrow from './HomePageArrow.jsx';
import { CiUser } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { PiPasswordLight } from "react-icons/pi";
import * as Yup from 'yup';

function SignupPage() {

  function callSignupApi(values) {
    console.log("sending data..", values);
  }

  const schema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().required("Password is required").min(8, "Password must be at least 8 characters"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref('password'), null], "Passwords must match")
  });

  const { handleSubmit, values, handleChange, errors, handleBlur, touched, isValid, dirty } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: ""
    },
    onSubmit: callSignupApi,
    validationSchema: schema,
  });

  return (
    <> 
      <HomePageArrow />
      <div className="flex flex-col items-center justify-center bg-gray-100 px-4 sm:px-0">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md max-w-md w-full sm:w-[500px]">
          <div className="flex justify-center mb-6">
            <h1 className="text-3xl font-semibold text-primary-default">Create Account</h1>
          </div>
          <div className="flex items-center border border-gray-300 rounded-md mb-4 px-3 py-2 bg-gray-200">
            <CiUser className="text-black mr-2" />
            <input
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              name="firstName"
              type="text"
              placeholder="First Name"
              className="flex-1 bg-gray-200 outline-none placeholder-slate-400"
              required
            />
          </div>
          {touched.firstName && errors.firstName && (
            <div className="text-primary-dark text-sm mb-2">{errors.firstName}</div>
          )}
          <div className="flex items-center border border-gray-300 rounded-md mb-4 px-3 py-2 bg-gray-200">
            <CiUser className="text-black mr-2" />
            <input
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              name="lastName"
              type="text"
              placeholder="Last Name"
              className="flex-1 bg-gray-200 outline-none placeholder-slate-400"
              required
            />
          </div>
          {touched.lastName && errors.lastName && (
            <div className="text-primary-dark text-sm mb-2">{errors.lastName}</div>
          )}
          <div className="flex items-center border border-gray-300 rounded-md mb-4 px-3 py-2 bg-gray-200">
            <TfiEmail className="text-slate-700 mr-2" />
            <input
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              name="email"
              type="email"
              placeholder="Email"
              className="flex-1 bg-gray-200 outline-none placeholder-slate-400"
              required
            />
          </div>
          {touched.email && errors.email && (
            <div className="text-primary-dark text-sm mb-2">{errors.email}</div>
          )}
          <div className="flex items-center border border-gray-300 rounded-md mb-4 px-3 py-2 bg-gray-200">
            <PiPasswordLight className="text-slate-700 mr-2 " />
            <input
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              name="password"
              type="password"
              placeholder="Password"
              className="flex-1 bg-gray-200 outline-none placeholder-slate-400"
              required
            />
          </div>
          {touched.password && errors.password && (
            <div className="text-primary-dark text-sm mb-2">{errors.password}</div>
          )}
          <div className="flex items-center border border-gray-300 rounded-md mb-4 px-3 py-2 bg-gray-200">
            <PiPasswordLight className="text-slate-700 mr-2 " />
            <input
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              className="flex-1 bg-gray-200 outline-none placeholder-slate-400"
              required
            />
          </div>
          {touched.confirmPassword && errors.confirmPassword && (
            <div className="text-primary-dark text-sm mb-2">{errors.confirmPassword}</div>
          )}
          <button
            type="submit"
            className="w-full h-12 bg-primary-default text-white hover:bg-primary-dark text-lg font-medium rounded-md disabled:bg-primary-light"
            disabled={!isValid || !dirty}
          >
            SIGN UP
          </button>
          <div className="flex justify-between mt-4">
            <p className="text-sm">
              Already have an account? <Link to="/login/" className="text-primary-dark underline">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default React.memo(SignupPage);
