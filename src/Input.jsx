import React from 'react';
import { useField } from 'formik';

function Input({ label, id, ...props }) {
  const [field, meta] = useField(props);
  const errorText = meta.touched && meta.error ? meta.error : '';

  return (
    <div className="w-full mb-4">
      {label && <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>}
      <input
        {...field}
        {...props}
        id={id}
        className={`mt-1 block w-full rounded-md border-2 p-2 ${errorText ? 'border-primary-dark' : 'border-gray-300'}`}
      />
      {errorText && <div className="text-primary-dark text-xs mt-1">{errorText}</div>}
    </div>
  );
}

export default React.memo(Input);
