import { useField } from "@unform/core";
import { useEffect } from "react";
import { useRef } from "react";

type SearchInputProps = {
  name: string;
};

export function SearchInput({name}: SearchInputProps) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value"
    });
  }, [fieldName, registerField]);

  return (
    <div className="search-input">
      <input ref={inputRef} type="text" name="search" id="search" defaultValue={defaultValue}/>
      <button className="search-icon" type="submit">
        <i className="bx bx-search"></i>
      </button>
    </div>
  );
}
