import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { ButtonProps } from './types';

const Button = ({ label, onPress, disabled, accessabilityLabelHint, ...props }: ButtonProps) => {
    return (
        <TouchableOpacity
            className={`w-full py-4 rounded-full ${disabled ? 'bg-disabled' : 'bg-blue-950'}`}
            onPress={onPress}
            disabled={disabled}
            accessible={true}
            accessibilityLabel={label}
            accessibilityRole='button'
            accessibilityState={{ disabled: !!disabled }}
            accessibilityHint={accessabilityLabelHint}

            {...props}
        >
            <Text className="text-white text-center font-medium text-base text-lg">
                {label}

            </Text>
        </TouchableOpacity>
    );
};

export default Button