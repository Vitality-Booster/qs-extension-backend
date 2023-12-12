import {Router} from "express"
import {createAllStatements, createStatement} from "../service/statementsService";
import {IReqStatement} from "../models/statementModel";

const router = Router()

router.use(async function (req, res, next) {
    console.log("This is the value of the cookies object: " + JSON.stringify(req.cookies))
    console.log("This is the value of the 'userId' inside the cookies object: " + req.cookies.usrId)
    if (!req.cookies || !req.cookies.userId)
        res.status(401).send()

})

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