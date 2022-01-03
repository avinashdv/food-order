import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.form}>
      <label htmlFor={props.data.label}>{props.data.label}</label>
      <input {...props.data} ref={ref} />
    </div>
  );
});

export default Input;
