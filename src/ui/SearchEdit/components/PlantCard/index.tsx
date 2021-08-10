import { useHistory } from 'react-router-dom';
import editIcon from '../../../../assets/images/Global/edit.svg'

type PlantCardProps = {
  id: string;
  popularName: string;
  scientificName: string;
  plantImage?: any;
};

export function PlantCard({id, popularName, scientificName}: PlantCardProps) {

  const history = useHistory();

  const handleGoEditPlant = (id: string) => {
    history.push(`/edit/${id}`);
  }

  return (
    <div className="searched-plant">
      <div className="plant-info">
        <strong>{popularName}</strong>
        <span>{scientificName}</span>
      </div>
      <button onClick={() => handleGoEditPlant(id)}>
        <img src={editIcon} alt="Botão de editar" />
      </button>
    </div>
  );
}
