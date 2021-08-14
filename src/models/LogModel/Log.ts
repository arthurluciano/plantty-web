import { ILog } from "./dto/LogDTO";

export class LogModel implements ILog {

  public id: string;
  public plant: string;
  public admin: string;
  public editType: string;
  public editDate: Date;
  
  constructor(log: LogModel) {
    this.id = log.id;
    this.admin = log.admin;
    this.plant = log.plant;
    this.editDate = log.editDate;
    this.editType = log.editType;
  }
  
}