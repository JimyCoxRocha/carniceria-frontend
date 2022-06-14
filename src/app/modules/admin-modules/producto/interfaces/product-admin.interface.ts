import { Category, DetailProduct, MeasureUnit, Product, Promotion } from "src/app/core/interfaces"

export interface IProductAdminSimple {
    namePromotion: string,
    nameCategories: string[],
    idProducto: number,
    imgUrl: string,
    descripcion: string,
    precio: number,
    titulo: string,
    status: number,
    idPromocion: null,
    idUnidad: number,
    stock: number,
    minimaUnidad: string
}

export interface IProductAdminDetail {
    product: Product,
    promotion: Promotion,
    unidadMedida: MeasureUnit,
    detail: DetailProduct[],
    categories: Category[]
}

export interface IProductAdmin {
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