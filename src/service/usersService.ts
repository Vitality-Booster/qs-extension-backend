import {IUser, UserModel} from "../models/userModel";
// import {compareSync, genSaltSync, hashSync} from "bcrypt-ts";
import {hashSync, compareSync, genSaltSync} from "bcrypt"
import {Types} from "mongoose";

export class ObjectId extends Types.ObjectId {}
export async function getUserById(id: string): Promise<IUser> {
    const user: IUser | null = await UserModel.findById(id)
    if (!user)
        throw Error("The user with the specified 'id' was not found")
    return user
}

export async function logIn(user: IUser): Promise<IUser> {
    const dbUser: IUser | null = await UserModel.findOne({
        email: user.email
    })
    if (!dbUser)
        throw Error("User not Found")
    if (compareSync(user.password ?? "", dbUser.password ?? "---")) {
        return dbUser
    } else {
        throw Error("Wrong password. Try again")
    }
}

export async function signUp(user: IUser): Promise<IUser> {
    if (!user.email || !user.password)
        throw Error("Both email and password must be provided to create an account!")
    try {
        const salt = genSaltSync()
        user.password = hashSync(user.password, salt)
        return await UserModel.create(user)
    } catch (er: any) {
        throw Error("Didn't manage to create a user. With message from Mongoose: " + er.message)
    }
}
