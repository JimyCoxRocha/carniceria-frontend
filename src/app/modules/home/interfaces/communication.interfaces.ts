import { ICarouselImage } from "."

export interface Communication{
    idComunicacion: number,
    tituloBoton: string,
    titulo: string,
    descripcion: string,
    idTipoComunicacion: number,
    status: number,
    fechaInicio?: string,
    fechaExpiracion?: string,
    urlImage: string,
    tipoComunicacion: TypeCommunication,
    urlBtn: string
}

export interface TypeCommunication{
    idTipoComunicacion: number,
    titulo: string
}

export interface ICarouselCommunication extends ICarouselImage{
    communcation: Communication
}