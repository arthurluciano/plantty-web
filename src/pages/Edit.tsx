import { Sidebar } from "../components/Sidebar";
import { Form } from "@unform/web";

import "../styles/insert.css";
import "../styles/admin-pages.css";
import { Input } from "../components/Form/Input";
import { useRef } from "react";
import { Select } from "../components/Form/Select";
import { TextArea } from "../components/Form/TextArea";
import validation from "../validations/InsertFormValidation";
import * as yup from "yup";
import { FormHandles } from "@unform/core";
import { FileInput } from "../components/Form/FileInput";

import axios from "axios";
import fetcher from '../api/fetcher';
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

type DataType = {
  id?: string;
  popularName: string;
  scientificName: string;
  ambience: string;
  origin: string;
  climate: string;
  gender: string;
  description: string;
  plantImage: File;
};

export function Edit() {
  const formRef = useRef<FormHandles>(null);
  const [initialData, setInitialData] = useState<DataType>();
  const { id }: any = useParams();

  useEffect(() => {
    async function fetchPlantData() {
      const response = await fetcher.get(`/plants/${id}`);

      setInitialData(response.data);
    }
    
    fetchPlantData();
  }, [id]);

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
      <Sidebar page="edit" />
      <div className="screen">
        <h2>Olá, administrador</h2>
        <span>Você está editando {initialData && initialData.popularName}</span>

        <Form ref={formRef} onSubmit={handleSubmit} id="insertForm" initialData={initialData}>
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
              <input type="submit" form="insertForm" value="Atualizar" />
              <input type="button" value="Preview" />
            </div>
          </div>
          <FileInput name="plantImage" />
        </Form>
      </div>
    </div>
  );
}
