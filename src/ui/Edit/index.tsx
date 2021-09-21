

import { useRef, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";

import * as yup from "yup";
import axios from "axios";
import fetcher from '../../services/axios/api';

import { Sidebar } from "../../shared/components/Sidebar";
import { Input } from "../../shared/components/Form/Input";
import { Select } from "../../shared/components/Form/Select";
import { TextArea } from "../../shared/components/Form/TextArea";
import { FileInput } from "../../shared/components/Form/FileInput";
import history from "../../shared/history";

import validation from "../../shared/validations/Form/InsertFormValidation";

import "./styles.css";
import "../../shared/styles/admin-pages.css";
import { useAuthentication } from "src/shared/hooks/useAuthentication";
import toast from "react-hot-toast";


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

  const { user } = useAuthentication();

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

      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });

      toast.remove();

      toast.loading(`Enviando informações ao servidor...`)

      await fetcher.patch(`/plants/${id}/`, formData, {
        headers: {
          "Content-Type": `multipart/form-data`,
        },
      });

      toast.remove();

      toast.success(`Planta '${data.popularName}' atualizada com sucesso!`);

      history.push("/edit");
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
        <h2>Olá, {user?.username}</h2>
        <span>Você está editando {initialData && initialData.popularName}</span>

        <Form ref={formRef} onSubmit={handleSubmit} id="insertForm" encType='multipart/form-data' initialData={initialData}>
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
