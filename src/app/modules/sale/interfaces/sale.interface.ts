import { IUserInformation } from "../../auth/interfaces/auth.interface";

export interface ISaleDetail {
    cantidad: number,
    idProducto: number
}

export interface ISendSale{
    motivoCostosAdicional: string,
    direccion: string,
    referencia: string,
    idCiudad: number,
    
    detalleVenta: ISaleDetail[],
    cliente: IUserInformation
}