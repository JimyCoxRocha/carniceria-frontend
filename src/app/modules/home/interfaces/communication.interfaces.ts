export interface CommunicationEntity{
    idComunicacion: number,
    tituloBoton: string,
    titulo: string,
    descripcion: string,
    idTipoComunicacion: number,
    status: number,
    fechaInicio?: string,
    fechaExpiracion?: string,
    urlImage: string,
    tipoComunicacion: TypeCommunication
}

export interface TypeCommunication{
    idTipoComunicacion: number,
    titulo: string
}