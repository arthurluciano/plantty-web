export interface IRepository<T> {
  create: (data: T) => Promise<T>;
  update?: (actualData: T, updatedData: T) => Promise<T>;
  findBy: (generic: any) => Promise<T>;
  listAll?: () => Promise<Array<T>>;
  list?: (limit: number, offset: number) => Promise<Array<T>>;
}