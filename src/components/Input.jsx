import React from "react";

const Input = ({ type, icon, placeholder, value, setValue }) => {
  return (
    <div>
      <span>{icon}</span>
      <input
        type={type}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </div>
  );
};

export default Input;
