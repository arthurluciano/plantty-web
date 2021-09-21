import { Sidebar } from "../../shared/components/Sidebar";
import "./styles.css";
import "../../shared/styles/admin-pages.css";
import { Form } from "@unform/web";
import { useRef } from "react";
import { FormHandles } from "@unform/core";
import { SearchInput } from "./components/SearchInput";
import { useState } from "react";
import fetcher from "../../services/axios/api";
import { PlantCard } from "./components/PlantCard";
import { useAuthentication } from "src/shared/hooks/useAuthentication";

export function SearchEdit() {
  const formRef = useRef<FormHandles>(null);
  const [searched, setSearched] = useState<Array<any>>([]);

  const { user } = useAuthentication();

  const handleSubmit = async ({ search }: any) => {
    try {
      const response = await fetcher.get(`/plants/list/${search}`);

      setSearched([...response.data]);
    } catch (error) {
      setSearched([]);
    }
  };
  
  const handleDeletePlant = async (id: string) => {
    try {
      const response = await fetcher.delete(`/plants/${id}/`);

      setSearched(searched.filter(plant => plant.id != id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="plant-page">
      <Sidebar page="edit" />
      <div className="screen">
        <h2>Olá, {user?.username}</h2>
        <span>Você está na tela de edição de plantas.</span>

        <div className="search-field">
          <span>Busque pelas plantas</span>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <SearchInput name="search" />
          </Form>

          <div className="searched-plants">
            {searched.length > 0 ? (
              searched.map(plant => (
                <PlantCard
                  key={plant.id}
                  id={plant.id}
                  popularName={plant.popularName}
                  scientificName={plant.scientificName}
                  plantImage={plant.plantImage}
                  handleDeletePlant={handleDeletePlant}
                />
              ))
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
