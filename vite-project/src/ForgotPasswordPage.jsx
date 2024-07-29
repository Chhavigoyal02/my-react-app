import React from "react";
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import HomePageArrow from './HomePageArrow.jsx';
import { BsCartCheck } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import * as Yup from 'yup';

function ForgotPasswordPage() {

  function requestPasswordReset(values) {
    console.log("Requesting password reset for:", values.email);
  }

  const schema = Yup.object().shape({
    email: Yup.string().email("Invalid email format").required("Email is required"),
  });

  const { handleSubmit, values, handleChange, errors, handleBlur, touched, isValid, dirty } = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: requestPasswordReset,
    validationSchema: schema,
  });

  return (
    <> 
      <HomePageArrow />
      <div className="flex flex-col items-center justify-center bg-gray-100 px-4 sm:px-6">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md max-w-sm w-full sm:max-w-md">
          <div className="flex justify-center mb-6">
            <h1 className="text-3xl font-semibold text-primary-default">Forgot Password</h1>
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
        </form>
      </div>
    </>
  );
}

export default React.memo(ForgotPasswordPage);
