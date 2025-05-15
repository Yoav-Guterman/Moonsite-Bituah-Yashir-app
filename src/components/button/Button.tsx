import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { ButtonProps } from './types';

const Button = ({ label, onPress, disabled, ...props }: ButtonProps) => {
    return (
        <TouchableOpacity
            className={`w-full py-4 rounded-lg ${disabled ? 'bg-gray-400' : 'bg-blue-400'}`}
            onPress={onPress}
            disabled={disabled}
            {...props}
        >
            <Text className="text-white text-center font-medium text-base">
                {label}
            </Text>
        </TouchableOpacity>
    );
};

export default Button