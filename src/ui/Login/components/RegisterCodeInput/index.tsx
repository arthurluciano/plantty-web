import { useField } from "@unform/core";
import { useRef, useEffect, InputHTMLAttributes } from "react";

type InputProps = {
  name: string;
  title: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function RegisterCodeInput({ name, title, ...rest }: InputProps) {
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

      <div className="register">
        <input
          ref={inputRef}
          name="register-code"
          id="register-code"
          {...rest}
        />
        <button type="submit">Registrar</button>
      </div>
    </div>
  );
}
