export type OptionType = 'Email' | 'Whatsapp' | 'SMS'

export interface SendCodeOptionsProps {
    selectedOption: OptionType
    onSelectOption: (option: OptionType) => void
}