import { Router } from "express"
import * as usersRouter from "./users"

const router: Router = Router()

router.get("/users/me", usersRouter.show)

export default router
