import {Schema, model, Types} from "mongoose"

export interface IStatement {
    actor: Types.ObjectId,
    action: string,
    object: Website,
    openedAt: Date,
    closedAt: Date
}

export interface IReqStatement {
    actor: Types.ObjectId,
    action: string,
    object: Website,
    openedAt: string,
    closedAt: string
}

export interface Website {
    hostname: string,
    favIconUrl?: string,
    title?: string
}

const statementSchema = new Schema<IStatement>({
    actor: {type: Schema.Types.ObjectId, ref: "Users"},
    action: {type: String, required: true},
    object: {
        hostname: {type: String, required: true},
        favIconUrl: String,
        title: String
    },
    openedAt: Date,
    closedAt: Date
})

export const StatementModel = model<IStatement>("Statements", statementSchema, "statements")