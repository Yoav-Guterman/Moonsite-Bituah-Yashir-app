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
        // Change from flex-row to flex-col to stack vertically
        <View className="flex-col w-full my-3"
            accessible={true}
            accessibilityLabel='אפשרויות לשליחת קוד'
            accessibilityRole='radiogroup'
        >
            <View>
                <Text className="color-primary text-right mb-2 self-center">שלחו לי את הקוד ב-</Text>
            </View>

            {/* Add justify-center to center the options */}
            <View className="flex-row justify-center">
                {options.map((option) => (
                    <TouchableOpacity
                        key={option.id}
                        onPress={() => onSelectOption(option.id as OptionType)}
                        className={`px-3 py-1 mx-1 border-b-2 ${selectedOption === option.id ? 'border-blue-950' : 'border-transparent'}`}
                        accessible={true}
                        accessibilityRole='radio'
                        accessibilityState={{ checked: selectedOption === option.id }}
                        accessibilityLabel={`שלח קוד ב${option.label}`}
                    >
                        <Text className={`color-primary ${selectedOption === option.id ? ' font-bold' : ''}`}>
                            {option.label}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};



export default SendCodeOptions