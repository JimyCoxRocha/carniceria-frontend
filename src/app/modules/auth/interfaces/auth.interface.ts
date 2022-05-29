import { IProductsCar } from "src/app/core/services";
import { IMenu } from "./menu.interface";

export interface IUserLogin {
    token: string,
    username: string,
    isAdminUser: Boolean,
    menu: IMenu[]
}