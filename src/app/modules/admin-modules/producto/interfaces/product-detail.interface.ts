export interface IAdminElementExtraDetailMixed {
    title: string,
    elements: IAdminElementExtraDetail[],
    actionAdd?: IActionElementExtraDetail,
}

export interface IAdminElementExtraDetail {
    title: string,
    actionAdd?: IActionElementExtraDetail,
    card: ICardElementExtraDetail[]
}

export interface IActionElementExtraDetail {
    title: string,
    icon?: string,
    action: () => void
}

export interface ICardElementExtraDetail {
    image?: string,
    title: string,
    description: string,
    actionDelete?: () => void,
    actionEdit?: () => void
}