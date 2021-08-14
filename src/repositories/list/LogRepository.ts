import { LogModel } from "src/models/LogModel/Log";
import { IRepository } from "../RepositoryInterface";

import fetcher from '../../services/axios/fetcher';

export class LogRepository implements IRepository<LogModel> {

  async create(data: LogModel) {
    const response = await fetcher.post("/logs", data);

    // if(!response.data){
    //   throw new Error("");
    // }

    return new LogModel(response.data);
  }

  async findBy(id: any) {
    const response = await fetcher.get(`/logs/${id}`)

    return new LogModel(response.data)
  }

  async listAll() {
    const response = await fetcher.get('/logs')

    const list = [...response.data].map((log) => new LogModel(log));

    return list;
  }
}