// src/screens/otpScreen/OTPScreen.tsx
import { router } from 'expo-router';
import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Button from '../../../components/button/Button';

const OTPScreen = () => {
    // State variables
    const [otpCode, setOtpCode] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const phoneNumber = '058-****465';

    // Handle continue button press
    const handleContinue = () => {
        console.log('Verifying code:', otpCode);
    };

    // Handle resend code
    const handleResendCode = () => {
        console.log('Resending code');
        // In a real app, you would make an API call to resend the code
    };

    // Back button handler
    const handleBack = () => {
        router.back();
    };

    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="px-6 flex-1">
                {/* Back button */}
                <TouchableOpacity
                    className="self-end mt-4"
                    onPress={handleBack}
                >
                    <Text className="text-4xl text-blue-950">→</Text>
                </TouchableOpacity>

                {/* Header */}
                <View className="items-center mt-6">
                    <Text className="text-2xl font-bold text-center text-blue-950">
                        הזינו את הקוד
                    </Text>

                    <Text className="text-base text-center mt-2 text-black">
                        שלחנו לך קוד אימות בן 6 ספרות
                        {'\n'}
                        למספר הטלפון {phoneNumber}
                    </Text>
                </View>

                <View className="w-full mb-4 border-b border-gray-300 mt-12 mb-12">
                    <Text
                        className={`absolute ${isFocused || otpCode.length > 0
                            ? 'text-xs text-blue-900 -top-3'
                            : 'text-base text-gray-500'
                            } right-0`}
                    >
                        קוד האימות:
                    </Text>
                    <TextInput
                        className="w-full py-2 text-right"
                        value={otpCode}
                        onChangeText={(text) => { setOtpCode(text) }}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        keyboardType="number-pad"
                        maxLength={6}
                    />
                </View>

                {/* Didn't receive code section */}
                <View className="mt-8 items-center">
                    <Text className="text-base">
                        לא הגיע?
                    </Text>
                    <TouchableOpacity onPress={handleResendCode}>
                        <Text className="text-purple-600 font-medium">
                            שלחו לי את הקוד בשנית
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* Bottom button */}
                <View className="mt-auto mb-8">
                    <Button
                        label="המשך"
                        onPress={handleContinue}
                        disabled={otpCode.length < 6}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default OTPScreen;