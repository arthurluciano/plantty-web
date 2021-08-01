import { useField } from "@unform/core";
import { useEffect, useRef } from "react";

type TextAreaProps = {
  name: string;
  title: string;
};

export function TextArea({ name, title }: TextAreaProps) {
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
    <div className="textarea-field">
      <label htmlFor={name}>{title}</label>
      <textarea ref={inputRef} className={`formInput${error ? " error" : ""}`} defaultValue={defaultValue}></textarea>
    </div>
  );
}
