import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { OptionType, SendCodeOptionsProps } from './types';

const SendCodeOptions = ({ selectedOption, onSelectOption }: SendCodeOptionsProps) => {
    const options = [
        { id: 'Email', label: 'Email' },
        { id: 'Whatsapp', label: 'Whatsapp' },
        { id: 'SMS', label: 'SMS' }
    ];

    return (
        <View className="flex-col w-full my-3"
            accessibilityLanguage='he'
            accessible={false}
            accessibilityLabel='אפשרויות לשליחת קוד'
            accessibilityRole='radiogroup'
        >
            <View>
                <Text className="color-primary text-right mb-2 self-center text-lg">שלחו לי את הקוד ב-</Text>
            </View>

            {/* options */}
            <View className="flex-row justify-center">
                {options.map((option) => (
                    <TouchableOpacity
                        style={{ direction: 'rtl' }}
                        key={option.id}
                        onPress={() => onSelectOption(option.id as OptionType)}
                        className={`px-3 py-2 mx-1 border-b-2 ${selectedOption === option.id ? 'border-primary' : 'border-transparent'}`}
                        accessible={true}
                        accessibilityRole='radio'
                        accessibilityState={{ checked: selectedOption === option.id }}
                        accessibilityLanguage='he'
                        accessibilityLabel={`שלח קוד ב${option.label}`}
                        focusable={true}
                    >
                        <Text className={`text-lg color-primary ${selectedOption === option.id ? ' font-bold' : ''}`}>
                            {option.label}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};



export default SendCodeOptions