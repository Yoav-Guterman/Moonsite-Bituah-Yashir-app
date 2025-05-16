import { router } from 'expo-router';
import React, { useState } from 'react';
import { Modal, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Button from '../../../components/button/Button';

const OTPScreen = () => {
    // State variables
    const [otpCode, setOtpCode] = useState<string>('');
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('')
    const [isResendModalVisible, setIsResendModalVisible] = useState(false);

    const phoneNumber = '058-****465';

    // Handle continue button press
    const handleContinue = () => {
        console.log('Verifying code:', otpCode);
        if (otpCode === '123456') {
            console.log(`otp code ${otpCode} is correct!`)
            setErrorMessage('')
        } else {
            console.log(`otp code ${otpCode} is incorrect`)
            setErrorMessage('הקוד שהזנת שגוי')
        }
    };

    // Handle resend code
    const handleResendCode = () => {
        console.log('Resending code')
        setErrorMessage('')
        setOtpCode('')
        setIsResendModalVisible(true);
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

                    <View className='mt-4'></View>

                    <Text className="text-base text-center mt-2 text-black">
                        שלחנו לך קוד אימות בן 6 ספרות
                        {'\n'}
                        למספר הטלפון &#x200E;{phoneNumber}&#x200E;
                    </Text>
                </View>

                <View className="w-full mb-4 border-b border-gray-300 mt-20 mb-12">
                    <Text
                        className={`absolute ${isFocused || otpCode.length > 0
                            ? 'text-xs text-gray-500 -top-3'
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

                <View className='mt-auto mb-2 justify-center items-center'>
                    {errorMessage &&
                        <Text className='text-red-500'>{errorMessage}</Text>
                    }
                </View>

                {/* Bottom button */}
                <View className="mb-8">
                    <Button
                        label="המשך"
                        onPress={handleContinue}
                        disabled={otpCode.length < 6}
                    />
                </View>
            </View>

            <Modal
                visible={isResendModalVisible}
                transparent={true}
                animationType="fade"

            >
                <View className="flex-1 bg-black/50 justify-center items-center">
                    <View className="bg-white rounded-lg h-1/4 w-4/5 p-6 items-center">
                        {/* Close button */}
                        <TouchableOpacity
                            className="absolute top-3 right-3"
                            onPress={() => setIsResendModalVisible(false)}
                        >
                            <Text className="text-xl">✕</Text>
                        </TouchableOpacity>

                        {/* Alert icon */}
                        <View className="w-12 h-12 rounded-full border border-gray-400 items-center justify-center mb-4">
                            <Text className="text-2xl">!</Text>
                        </View>

                        {/* Message */}
                        <Text className="text-lg font-bold mb-6 text-center">
                            הקוד נשלח שוב
                        </Text>

                        {/* Confirm button */}
                        <TouchableOpacity
                            className="bg-blue-900 py-3 rounded-full mt-auto h-12 px-12 w-full"
                            onPress={() => setIsResendModalVisible(false)}
                        >
                            <Text className="text-white font-medium flex-1 text-center">אישור</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
};

export default OTPScreen;