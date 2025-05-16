export interface ModalProps {
    visible: boolean,
    onClose: () => void,
    title: string,
    type?: 'success' | 'alert',
    buttonText: string,
    onButtonPress?: () => void
}