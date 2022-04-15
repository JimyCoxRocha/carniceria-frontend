export interface Category{
    idCategoria: number,
    titulo: string,
    descripcion: string,
    status: number,
    subCategoria: SubCategory[],
}

export interface SubCategory{
    idSubcategoria: number,
    titulo: string,
    descripcion: string,
    status: string
}