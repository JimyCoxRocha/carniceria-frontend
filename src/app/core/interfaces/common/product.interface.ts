import { Promotion, MeasureUnit } from "."

export interface ProductoResponse{
    product: Product,
    promotion: Promotion,
    unidadMedida: MeasureUnit,
    detail: DetailProduct[]
}

export interface Product{
    idProducto: number,
    imgUrl: string,
    descripcion: string,
    precio: number,
    titulo: string,
    status: number,
    idPromocion: number | null,
    idUnidad: number,
    stock: number,
    minimaUnidad: string
}

/* UTILIZADO EN product-admin.interface */
export interface DetailProduct{
    idDetalleProducto: number,
    tituloDetalle: string,
    descripcion: string,
    urlImg: string,
    idProducto: number
}