import {Router} from "express"
import {createAllStatements, createStatement} from "../service/statementsService";
import {IReqStatement} from "../models/statementModel";

const router = Router()

router.post("/", async function(req, res, next) {
    const {actor, object, action, openedAt, closedAt} = req.body

    await createStatement(actor, object, action, openedAt, closedAt)
})

router.post("/all", async function(req, res, next) {
    const statements: IReqStatement[] = req.body

    console.log("There are all the statements I receive: " + JSON.stringify(statements))

    await createAllStatements(statements)
})

export default router;