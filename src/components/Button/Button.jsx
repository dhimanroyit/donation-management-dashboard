import React from "react";

export default function Button({ className, type, children }) {
  return (
    <button
      className={`w-full bg-slate-900 text-white py-3 px-6 mt-8 font-semibold rounded-md  ${className}`}
      type={type}
    >
      {children}
    </button>
  );
}
