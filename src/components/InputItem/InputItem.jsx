import React from "react";

export default function InputItem({
  name,
  label,
  type,
  placeholder,
  register,
  className = "",
}) {
  return (
    <div className={`w-full ${className}`}>
      <label htmlFor={name} className="mb-2 block capitalize">
        {label}
      </label>
      <input
        id={name}
        className="bg-white py-2.5 px-5 rounded-md shadow-sm w-full focus:outline-none"
        name={name}
        type={type}
        placeholder={placeholder}
        {...register}
      />
    </div>
  );
}
