import {StatementModel, IStatement, Website, IReqStatement} from "../models/statementModel"
import {ObjectId} from "./usersService";

export enum ActionEnum {
    Opened = "opened",
    Closed = "closed",
}

export async function createStatement(userId: string, object: Website, action: ActionEnum, openedAt: string, closedAt: string): Promise<void> {
    console.log("Here is the userId: " + userId)
    console.log("Here is the type of the UserId: " + typeof userId)
    const statement: IStatement = {actor: new ObjectId(userId), action: action, object: object, openedAt: new Date(openedAt), closedAt: new Date(closedAt)}

    await StatementModel.create(statement)
}

export async function createAllStatements(reqStatements: IReqStatement[]) {
    const statements: IStatement[] = []
    for (let i = 0; i < reqStatements.length; i++) {
        statements.push(await reqStatToStat(reqStatements[i]))
    }

    await StatementModel.insertMany(statements)
}

export async function reqStatToStat(reqStatement: IReqStatement) {
    const statement: IStatement = {actor: reqStatement.actor, action: reqStatement.action, object: reqStatement.object, openedAt: new Date(reqStatement.openedAt), closedAt: new Date(reqStatement.closedAt)}

    return statement
}