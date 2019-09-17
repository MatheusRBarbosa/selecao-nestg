export interface IBaseService<T>{

    findAll(): Promise<T[]>;
    findOne(id: number): Promise<T>;
    createOne(object: T): Promise<void>;
    updateOne(id:number, object: T): Promise<void>;
    deleteOne(id: number): Promise<void>;
}
