import { Router, Request, Response, NextFunction } from "express"

const router = Router()

router.get("/me", (req: Request, res: Response, next: NextFunction) => {
    try {
        return res.json({
            message: "Just a line of code",
        })
    } catch (e) {
        next(e)
    }
})

export default router
