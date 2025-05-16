import Modal from '@/components/modal/Modal';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Button from '../../../components/button/Button';

const OTPScreen = () => {
    // State variables
    const [otpCode, setOtpCode] = useState<string>('')
    const [isFocused, setIsFocused] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string>('')
    const [isResendModalVisible, setIsResendModalVisible] = useState<boolean>(false)
    const [isSuccessModalVisible, setIsSuccessModalVisible] = useState<boolean>(false)

    const phoneNumber = '058-****465';

    // Handle continue button press
    const handleContinue = () => {
        console.log('Verifying code:', otpCode)
        if (otpCode === '123456') {
            console.log(`otp code ${otpCode} is correct!`)
            setErrorMessage('')
            setIsSuccessModalVisible(true)
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
        setIsResendModalVisible(true)
    };

    // Back button handler
    const handleBack = () => {
        router.back()
    };

    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="px-6 flex-1">
                {/* Back button */}
                <TouchableOpacity
                    className="self-end mt-4"
                    onPress={handleBack}
                >
                    <Text className="text-4xl color-primary">→</Text>
                </TouchableOpacity>

                {/* Header */}
                <View className="items-center mt-6">
                    <Text className="text-2xl font-bold text-center color-primary">
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
                            ? 'text-xs color-inactive -top-3'
                            : 'text-base color-inactive'
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
                    <TouchableOpacity className='mt-2' onPress={handleResendCode}>
                        <Text className="color-link font-semibold">
                            שלחו לי את הקוד בשנית
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* OTP code error message */}
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

            {/* resent OTP modal */}
            <Modal
                visible={isResendModalVisible}
                onClose={() => setIsResendModalVisible(false)}
                title={'הקוד נשלח שוב'}
                buttonText={'אישור'}
                type='alert'
                onButtonPress={() => setIsResendModalVisible(false)}
            />

            {/* success OTP modal */}
            <Modal
                visible={isSuccessModalVisible}
                onClose={() => setIsSuccessModalVisible(false)}
                title={'הקוד אושר, לחץ אישור על מנת לחזור לאפליקציה'}
                buttonText={'אישור'}
                type='success'
                onButtonPress={() => setIsSuccessModalVisible(false)}
            />

        </SafeAreaView>
    );
};

export default OTPScreen