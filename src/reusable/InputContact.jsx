import React from "react";

const InputContact = ({ htmlFor, type, name, placeholder, onChange, value }) => {
  return (
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
        value={value}
        required
        aria-required="true"
      />
  );
};

export default InputContact;
