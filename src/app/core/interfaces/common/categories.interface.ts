export interface Category{
    idCategoria: number,
    titulo: string,
    descripcion: string,
    status: number,
    urlImage: string,
    subCategoria: SubCategory[],
}

export interface SubCategory{
    idSubcategoria: number,
    titulo: string,
    descripcion: string,
    status: string,
    urlImage: string
    categories : Category[],
}