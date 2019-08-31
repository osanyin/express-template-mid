import { Repository, getRepository, DeleteResult } from "typeorm"

type ObjectType<T> = { new (): T } | Function

export default class BaseRepository<T> {
    private repository: Repository<T>

    constructor(type: ObjectType<T>) {
        this.repository = getRepository(type)
    }

    all(): Promise<T[]> {
        return this.repository.find()
    }

    save(entity: T): Promise<T> {
        return this.repository.save(entity)
    }

    update(entity: T): Promise<T> {
        return this.repository.save(entity)
    }

    delete(id: number): Promise<DeleteResult> {
        return this.repository.delete(id)
    }

    find(id: number): Promise<T> {
        return this.repository.findOne(id)
    }
}
