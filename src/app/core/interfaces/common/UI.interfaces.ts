export interface ModalConfigurationInterface{
    title?: string,
    primaryButton?: ButtonModal,
    secundaryButton?: ButtonModal,
    contentHtml?: string,
    goBackLink?: string
}

export interface ButtonModal {
    name: string,
    text: string,
    action?: () => void
}

export interface DataModelConfirm {
    title?: string,
    subtitle?: string,
    textBtnCancel?: string,
    textBtnAccept?: string
}