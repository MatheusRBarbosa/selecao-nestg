import { IBaseService } from "./IBase.interface";
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class BaseService <T> implements IBaseService<T>{

    constructor(
        private readonly baseRepository: Repository<T>
    ){}

    async findAll(): Promise<T[]> {
        return await this.baseRepository.find();
    }  

    async findOne(id: number): Promise<T> {
        return await this.baseRepository.findOne(id);
    }

    async createOne(object: T): Promise<void> {
        await this.baseRepository.save(object);
    }

    async updateOne(id:number, object: T): Promise<void> {
        await this.baseRepository.update(id, object);
    }

    async deleteOne(id: number): Promise<void> {
        await this.baseRepository.delete(id);
    }

    
}
