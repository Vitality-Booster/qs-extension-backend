import {Router} from "express"
import {getOverallWebsiteStats} from "../service/statisticsService";

const router = Router()

router.get("/overall-websites/:id", async function(req, res, next) {
    // await createStatement(actor, object, action, openedAt, closedAt)

    const statistics = await getOverallWebsiteStats(req.params.id);

    res.send({statistics: statistics})
})

export default router;