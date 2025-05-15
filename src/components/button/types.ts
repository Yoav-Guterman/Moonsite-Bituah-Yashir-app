import { TouchableOpacityProps } from "react-native"

export interface ButtonProps extends TouchableOpacityProps {
    label: string
    onPress: () => void
    disabled?: boolean
}