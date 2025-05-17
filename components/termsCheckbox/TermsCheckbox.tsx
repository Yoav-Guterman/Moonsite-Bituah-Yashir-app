import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { TermsCheckboxProps } from './types';

const TermsCheckbox = ({ checked, onToggle }: TermsCheckboxProps) => {
    return (
        <TouchableOpacity style={{ direction: 'rtl' }} className="flex-row items-center my-2 text-right" onPress={onToggle}>
            <View className={`w-5 h-5 border border-pink-500 rounded mr-4 items-center justify-center ${checked ? 'bg-pink-500' : 'bg-white'}`}>
                {checked && <Text className="text-white text-xs">✓</Text>}
            </View>
            <Text className="text-md"> אישרתי את</Text>
            <Text className="text-md font-bold color-link"> תנאי השימוש</Text>
            <Text className="text-md"> ואת</Text>
            <Text className="text-md font-bold color-link"> תקנון מועדון ישיר</Text>
        </TouchableOpacity>
    );
};

export default TermsCheckbox;

