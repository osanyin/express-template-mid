import { Router, Request, Response, NextFunction } from "express"
import UserRepository from "../../repositories/UserRepository"
import { User } from "../../database/entities/User.entity"

const router = Router()

router.get("/me", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userRepository: UserRepository = new UserRepository(User)
        const user: User = await userRepository.find(1)

        return res.json({
            message: user,
        })
    } catch (e) {
        next(e)
    }
})

export default router
