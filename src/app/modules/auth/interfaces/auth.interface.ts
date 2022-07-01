import { IProductsCar } from "src/app/core/services";
import { IMenu } from "./menu.interface";

export interface IUserLoggedIn {
    token: string,
    username: string,
    idUser: string,
    isAdminUser: Boolean,
    menu: IMenu[]
}

export interface ILogin {
    username: string,
    password: string
}

export interface IPersonRegistration {
    email: string,
    nombre: string,
    idSexo: number,
    apellido: string,
    cedula: string,
}

export interface IRegistration {
    usuario: ILogin,
    persona: IPersonRegistration
}

export interface IUserInformation {
    idPersona: number,
    email: string,
    nombre: string,
    apellido: string,
    idSexo: number,
    cedula: string,
    direccion1: string,
    direccion2: string,
    idCiudad: number
}