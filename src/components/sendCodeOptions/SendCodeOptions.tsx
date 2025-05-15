import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { OptionType, SendCodeOptionsProps } from './types';

const SendCodeOptions = ({ selectedOption, onSelectOption }: SendCodeOptionsProps) => {
    const options = [
        { id: 'email', label: 'Email' },
        { id: 'whatsapp', label: 'Whatsapp' },
        { id: 'sms', label: 'SMS' }
    ];

    return (
        // Change from flex-row to flex-col to stack vertically
        <View className="flex-col w-full my-3">
            <View>
                {/* Add text-right to align text properly for RTL */}
                <Text className="text-blue-950 text-right mb-2 self-center">שלחו לי את הקוד ב-</Text>
            </View>

            {/* Add justify-center to center the options */}
            <View className="flex-row justify-center">
                {options.map((option) => (
                    <TouchableOpacity
                        key={option.id}
                        onPress={() => onSelectOption(option.id as OptionType)}
                        className={`px-3 py-1 mx-1 border-b-2 ${selectedOption === option.id ? 'border-blue-950' : 'border-transparent'}`}
                    >
                        <Text className={`${selectedOption === option.id ? 'text-blue-950 font-bold' : 'text-blue-950'}`}>
                            {option.label}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};



export default SendCodeOptions