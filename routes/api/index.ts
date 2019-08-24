import { Router, Request, Response, NextFunction } from "express"
import { ValidationError, ErrorMessage } from "validation-errors"

import usersRouter from "./users"

const router: Router = Router()

router.use("/users", usersRouter)

router.use((err: ValidationError, req: Request, res: Response, next: NextFunction) => {
    if (err.name === "ValidationError") {
        return res.status(422).json({
            errors: Object.keys(err.errors).reduce((errors: ErrorMessage, key: string) => {
                errors[key] = err.errors[key].message

                return errors
            }, {}),
        })
    }

    return next(err)
})

export default router
