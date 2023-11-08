import {Router} from "express"
import {createStatement} from "../service/statementsService";

const router = Router()

router.post("/", async function(req, res, next) {
    const {actor, object, action} = req.body

    await createStatement(actor, object, action)
})

export default router;