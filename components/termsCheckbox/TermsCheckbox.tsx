import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { TermsCheckboxProps } from './types';

const TermsCheckbox = ({ checked, onToggle }: TermsCheckboxProps) => {
    return (
        <TouchableOpacity style={{ direction: 'rtl' }}
            className="flex-row items-center text-right py-6"
            onPress={onToggle}
            accessibilityLanguage='he'
            accessible={true}
            accessibilityRole='checkbox'
            accessibilityState={{ checked }}
            accessibilityLabel='אישור תנאי השימוש ותקנון מועדון ישיר'
            accessibilityHint={`${checked ? 'הקש כדי לבטל את האישור' : 'הקש כדי לאשר'}`}
            focusable={true}
        >
            <View className={`w-5 h-5 border border-pink-500 rounded mr-2 items-center justify-center ${checked ? 'bg-pink-500' : 'bg-white'}`}
                importantForAccessibility='no'>
                {checked && <Text className="text-white text-xs">✓</Text>}
            </View>

            <View className="flex-1 flex-row flex-wrap">
                <Text className="text-base">
                    <Text> אישרתי את</Text>
                    <Text className="font-bold color-link"> תנאי השימוש</Text>
                    <Text> ואת</Text>
                    <Text className="font-bold color-link pr-4 pl-4"> תקנון מועדון ישיר</Text>
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default TermsCheckbox;

