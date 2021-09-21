import { useField } from "@unform/core";
import { ChangeEvent, useEffect, useState, useRef } from "react";

type FileInputProps = {
  name: string;
};

export function FileInput({ name }: FileInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, registerField, defaultValue } = useField(name);
  const [preview, setPreview] = useState(defaultValue);

  const handleOpenFileSelector = () => {
    inputRef.current?.click();
  };

  const handleChangeImage = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const url = URL.createObjectURL(file);

    setPreview(url);
  };

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "files[0]",
    });
  }, [fieldName, registerField]);

  return (
    <div className="image-field">
      <h2>Imagem da planta</h2>
      <div className="image-previewer" onClick={() => handleOpenFileSelector()}>
        <img src={preview ? preview : defaultValue} alt="" id="image-preview" />
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          onChange={handleChangeImage}
          defaultValue={defaultValue}
          name={name}
          hidden
        />
      </div>
      <span>Clique no círculo para escolher a imagem da planta.</span>
    </div>
  );
}
