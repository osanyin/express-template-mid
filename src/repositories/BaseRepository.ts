import { Repository, getRepository, DeleteResult } from "typeorm"

type ObjectType<T> = { new (): T } | Function

export default class BaseRepository<T> {
    private repository: Repository<T>

    constructor(type: ObjectType<T>) {
        this.repository = getRepository(type)
    }

    async all(): Promise<T[]> {
        return this.repository.find()
    }

    async save(entity: T): Promise<T> {
        return this.repository.save(entity)
    }

    async update(entity: T): Promise<T> {
        return this.repository.save(entity)
    }

    async delete(id: number): Promise<DeleteResult> {
        return this.repository.delete(id)
    }

    async find(id: number): Promise<T> {
        return this.repository.findOne(id)
    }
}
