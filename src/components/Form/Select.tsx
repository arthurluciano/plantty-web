import { useField } from "@unform/core";
import { useEffect, useRef } from "react";

type SelectProps = {
  title: string;
  name: string;
};

export function Select({ title, name }: SelectProps) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField]);

  return (
    <div className="input-field">
      <label htmlFor={name}>{title}</label>
      <select ref={inputRef}
        className={`formInput${error ? " error" : ""}`}
        value={defaultValue}
      >
        <option value="">Selecione *</option>
        <option value="male">Masculino</option>
        <option value="female">Feminino</option>
        <option value="hermaphrodite">Hermafrodita</option>
      </select>
    </div>
  );
}
