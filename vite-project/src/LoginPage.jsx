import React from "react";
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import HomePageArrow from './HomePageArrow.jsx';
import { BsCartCheck } from "react-icons/bs";
import { PiPasswordLight } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import * as Yup from 'yup';

function LoginPage() {

  function callLoginApi(values) {
    console.log("sending data..", values.email, values.password);
  }

  const schema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().required("Password is required").min(8, "Password must be at least 8 characters"),
  });

  const { handleSubmit, values, handleChange, errors, handleBlur, touched, isValid, dirty } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: callLoginApi,
    validationSchema: schema,
  });

  return (
    <> 
      <HomePageArrow />
      <div className="flex flex-col items-center justify-center bg-gray-100 px-4 sm:px-6">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md max-w-sm w-full sm:max-w-md">
          <div className="flex justify-center mb-6">
            <h1 className="text-3xl font-semibold text-primary-default">Welcome Back</h1>
          </div>
          <div className="flex items-center border border-gray-300 rounded-md mb-4 px-3 py-2 bg-gray-200">
            <CiUser className="text-black mr-2" />
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
            <PiPasswordLight className="text-slate-700 mr-2" />
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
        </form>
      </div>
    </>
  );
}

export default React.memo(LoginPage);
