export interface IMenu{
    module: string,
    icon: string,
    id: number,
    route: string,
    items: IOption[]
}

export interface IOption{
    option: string,
    icon: string,
    id: number,
    route: string
}