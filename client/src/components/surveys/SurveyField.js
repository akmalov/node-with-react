import React from 'react';

export default ({input, label}) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} onBlur={input.onBlur} onChange={input.onChange}/>
    </div>
  );
};