import { Sidebar } from "../../shared/components/Sidebar";
import { Form } from "@unform/web";

import "./styles.css";
import "../../shared/styles/admin-pages.css";
import { Input } from "../../shared/components/Form/Input";
import { useRef } from "react";
import { Select } from "../../shared/components/Form/Select";
import { TextArea } from "../../shared/components/Form/TextArea";
import validation from "../../shared/validations/Form/InsertFormValidation";
import * as yup from "yup";
import { FormHandles } from "@unform/core";
import { FileInput } from "../../shared/components/Form/FileInput";

import axios from "axios";

type DataType = {
  popularName: string;
  scientificName: string;
  ambience: string;
  origin: string;
  climate: string;
  gender: string;
  description: string;
  plantImage: File;
};

export function Insert() {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = async (data: DataType, { reset }: any) => {
    try {
      formRef.current?.setErrors({});

      await validation.validate(data, { abortEarly: false });

      const formData = new FormData();

      formData.append("file", data.plantImage);
      formData.append("upload_preset", "dud7id0c");

      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dtarkqzrh/image/upload",
        formData
      );
      console.log(response.data);

      reset();
    } catch (error) {
      if (!(error instanceof yup.ValidationError)) return;
      const validationErrors = {} as any;

      error.inner.forEach((error) => {
        if (!error.path) return;

        validationErrors[error.path] = error.message;
      });

      formRef.current?.setErrors(validationErrors);
    }
  };

  return (
    <div className="plant-page">
      <Sidebar page="insert" />
      <div className="screen">
        <h2>Olá, administrador</h2>
        <span>Você está na tela de inserção de plantas.</span>

        <Form ref={formRef} onSubmit={handleSubmit} id="insertForm">
          <div className="form-inputs">
            <div className="input-fields">
              <Input name="popularName" title="Nome popular" />
              <Input name="scientificName" title="Nome científico" />
              <Input name="ambience" title="Ambiente" />
              <Input name="origin" title="Origem" />
              <Input name="climate" title="Clima" />
              <Select name="gender" title="Sexo" />
            </div>
            <TextArea name="description" title="Descrição" />
            <div className="buttons">
              <input type="submit" form="insertForm" value="Inserir" />
              <input type="button" value="Preview" />
            </div>
          </div>
          <FileInput name="plantImage" />
        </Form>
      </div>
    </div>
  );
}
