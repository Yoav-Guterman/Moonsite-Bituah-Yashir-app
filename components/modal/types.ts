export interface ModalProps {
    visible: boolean,
    onClose: () => void,
    title: string,
    accessibilityLabelHint: string
    type?: 'success' | 'alert',
    buttonText: string,
    onButtonPress?: () => void

}