import { Request, Response, NextFunction } from "express"
import UserRepository from "../../repositories/UserRepository"
import { User } from "../../database/entities/User.entity"

export async function show(req: Request, res: Response, next: NextFunction) {
    try {
        const userRepository: UserRepository = new UserRepository(User)
        const user: User = await userRepository.find(1)

        return res.json({
            message: user,
        })
    } catch (e) {
        next(e)
    }
}
