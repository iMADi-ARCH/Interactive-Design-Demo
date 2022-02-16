import React from "react";

const Button = ({ children }) => {
  return (
    <button className="px-5 py-2 bg-slate-50 rounded-lg text-slate-900">
      {children}
    </button>
  );
};

export default Button;
