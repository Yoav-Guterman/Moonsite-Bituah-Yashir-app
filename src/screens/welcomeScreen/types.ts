import { OptionType } from "@/src/components/sendCodeOptions/types";

export interface WelcomeScreenProps {
    navigation?: any; // This would be properly typed with your navigation library
}

export interface WelcomeScreenState {
    agreedToTerms: boolean
    selectedOption: OptionType
}