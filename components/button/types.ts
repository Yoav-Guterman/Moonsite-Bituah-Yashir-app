import { TouchableOpacityProps } from "react-native"

export interface ButtonProps extends TouchableOpacityProps {
    label: string
    accessabilityLabelHint?: string
    onPress: () => void
    disabled?: boolean

}