import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { CheckboxProps } from './types';

const Checkbox = ({ label, checked, onToggle }: CheckboxProps) => {
    return (
        <TouchableOpacity className="flex-row items-center my-2" onPress={onToggle}>
            <Text className="text-md flex-1 text-center">{label}</Text>
            <View className={`w-5 h-5 border border-pink-500 rounded mr-4 items-center justify-center ${checked ? 'bg-pink-500' : 'bg-white'}`}>
                {checked && <Text className="text-white text-xs">✓</Text>}
            </View>

        </TouchableOpacity>
    );
};

export default Checkbox;

