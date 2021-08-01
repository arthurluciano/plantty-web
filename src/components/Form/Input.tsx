import { useField } from "@unform/core";
import { useRef, useEffect } from "react";

type InputProps = {
  name: string;
  title: string;
};

export function Input({ name, title }: InputProps) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <div className="input-field">
      <label htmlFor={name}>{title}</label>
      <input
        ref={inputRef}
        type="text"
        className={`formInput ${error ? " error" : ""}`}
        defaultValue={defaultValue}
      />
    </div>
  );
}
