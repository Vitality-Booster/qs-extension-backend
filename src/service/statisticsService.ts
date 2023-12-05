import {StatementModel} from "../models/statementModel";
import {OverallWebsite} from "../types/statistics";
import * as mongoose from "mongoose";
const ObjectId = mongoose.Types.ObjectId;

export async function getOverallWebsiteStats(userId: string): Promise<OverallWebsite[]> {
    const overallWebsitesAggr = await StatementModel.aggregate([
        {
            $match: { actor: new ObjectId(userId)}
        },
        {
            $group: {
                _id: "$object.hostname",
                length: {
                    $sum: {
                        $dateDiff: {
                            startDate: "$openedAt",
                            endDate: "$closedAt",
                            unit: "minute"
                        }
                    }
                },
                favIconUrl: {
                    $first: "$object.favIconUrl"
                }
            }
        },
        {
            $sort: { "length": -1 }
        }
    ])

    const overallWebsites: OverallWebsite[] = []
    overallWebsitesAggr.forEach(web => overallWebsites.push({hostname: web._id, favIconUrl: web.favIconUrl, length: web.length}))

    return overallWebsitesAggr
}