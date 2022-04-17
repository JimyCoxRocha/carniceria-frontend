export interface ProductoResponseEntity{
    product: ProductEntity,
    promotion: PromotionEntity,
    unidadMedida: MeasureUnitEntity,
    detail: DetailProductEntity[]
}

export interface ProductEntity{
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

export interface PromotionEntity{
    idPromocion: string
    fechaExpiracion: Date
    tipoPromo: string
    porcentajePromo: string
}

export interface MeasureUnitEntity{
    idUnidad: number,
    unidad: string
}

export interface DetailProductEntity{
    idDetalleProducto: number,
    tituloDetalle: string,
    descripcion: string,
    urlImg: string,
    idProducto: number
}