export interface IQuotation{
    discount: number,
    subTotal: number,
    total: number,
    provinceName: string,
    provinceAmount: number
}

export interface IItemGroupSelected{
    label: string,
    value: number
}

export interface IFormDetail{
    email: string,
    name: string,
    surname: string,
    identity: string,
    direction1: string,
    direction2: string,
    cellphone: string
}

export interface IAccounts{
    banco: string,
    tipoCuenta: string,
    numCuenta: string
}