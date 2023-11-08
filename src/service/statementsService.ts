import {StatementModel, IStatement} from "../models/statementModel"
import {ObjectId} from "./usersService";

export enum ActionEnum {
    Opened = "opened",
    Closed = "closed",
}

export async function createStatement(userId: string, hostname: string, action: ActionEnum): Promise<void> {
    console.log("Here is the userId: " + userId)
    console.log("Here is the type of the UserId: " + typeof userId)
    const statement: IStatement = {actor: new ObjectId(userId), action: action, object: hostname}

    await StatementModel.create(statement)
}