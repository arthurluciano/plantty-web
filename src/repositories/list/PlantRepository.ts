import { Plant } from "src/models/PlantModel/Plant";
import { IRepository } from "../RepositoryInterface";

import fetcher from '../../services/axios/api';

export class PlantRepository implements IRepository<Plant> {

  async create(data: Plant) {
    const response = await fetcher.post(`/plants`, data);

    return new Plant(response.data);
  }

  async findBy(search: String) {
    const response = await fetcher.get(`/plants/${search}`)

    return new Plant(response.data);
  }
}