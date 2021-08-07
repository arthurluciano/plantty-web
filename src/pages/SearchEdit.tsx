import { Sidebar } from "../components/Sidebar";
import "../styles/edit.css";
import "../styles/admin-pages.css";
import { Form } from "@unform/web";
import { useRef } from "react";
import { FormHandles } from "@unform/core";
import { SearchInput } from "../components/SearchInput";
import { useState } from "react";
import fetcher from "../api/fetcher";
import { PlantCard } from "../components/PlantCard";

export function SearchEdit() {
  const formRef = useRef<FormHandles>(null);
  const [searched, setSearched] = useState<Array<any>>([]);

  const handleSubmit = async ({ search }: any) => {
    const response = await fetcher.get(`/plants/${search}`);

    setSearched([response.data]);
  };

  return (
    <div className="plant-page">
      <Sidebar page="edit" />
      <div className="screen">
        <h2>Olá, administrador</h2>
        <span>Você está na tela de edição de plantas.</span>

        <div className="search-field">
          <span>Busque pelas plantas</span>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <SearchInput name="search" />
          </Form>

          <div className="searched-plants">
            {searched.length > 0 ? (
              searched.map((plant) => {
                return (
                  <PlantCard
                    key={plant.id}
                    id={plant.id}
                    popularName={plant.popularName}
                    scientificName={plant.scientificName}
                  />
                );
              })
            ) : (
              <>
                <h1>Ainda não foi pesquisada nenhuma planta!</h1>
                <span>Procure no campo de pesquisa...</span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
