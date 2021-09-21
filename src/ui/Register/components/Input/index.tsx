import { useField } from "@unform/core";
import { useRef, useEffect, InputHTMLAttributes } from "react";

type InputProps = {
  name: string;
  title: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function Input({ name, title, ...rest }: InputProps) {
  const inputRef = useRef(null);
  const { fieldName, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <div className="input-group">
      <label htmlFor={name}>{title}</label>
      <input ref={inputRef} name={name} id={name} {...rest} />
    </div>
  );
}
