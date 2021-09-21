import { IPlant } from "./dto/PlantDTO";

export class Plant implements IPlant {

  public id: string;
  public popularName: string;
  public scientificName: string;
  public ambience: string;
  public origin: string;
  public climate: string;
  public gender: string;
  public description: string;
  public plantImage: string;

  constructor(plant: IPlant) {
    this.id = plant.id;
    this.popularName = plant.popularName;
    this.scientificName = plant.scientificName;
    this.ambience = plant.ambience;
    this.origin = plant.origin;
    this.climate = plant.climate;
    this.gender = plant.gender;
    this.description = plant.description;
    this.plantImage = plant.plantImage;
  }

}