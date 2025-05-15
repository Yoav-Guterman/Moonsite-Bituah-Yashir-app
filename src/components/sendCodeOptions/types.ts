export type OptionType = 'email' | 'whatsapp' | 'sms'

export interface SendCodeOptionsProps {
    selectedOption: OptionType
    onSelectOption: (option: OptionType) => void
}