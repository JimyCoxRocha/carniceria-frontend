export interface ModalConfigurationInterface{
    title?: string,
    primaryButton?: ButtonModal,
    secundaryButton?: ButtonModal,
    contentHtml?: string
}

export interface ButtonModal {
    name: string,
    text: string
}

export interface DataModelConfirm {
    title?: string,
    subtitle?: string,
    textBtnCancel?: string,
    textBtnAccept?: string
}