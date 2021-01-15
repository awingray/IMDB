import React from "react";

const Form = ({ name, label, value, type, onChange }) => {
  return (
    <div className="form-group" key={name}>
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        id={name}
        name={name}
        type={type}
        className="form-control"
        placeholder={name}
      />
    </div>
  );
};

export default Form;
