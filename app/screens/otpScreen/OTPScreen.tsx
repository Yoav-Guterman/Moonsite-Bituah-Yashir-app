import Modal from '@/components/modal/Modal';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { AccessibilityInfo, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
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
            AccessibilityInfo.announceForAccessibility('הקוד אומת בהצלחה');
            setErrorMessage('')
            setIsSuccessModalVisible(true)
        } else {
            AccessibilityInfo.announceForAccessibility('הקוד שהזנת שגוי');
            setErrorMessage('הקוד שהזנת שגוי')
        }
    };

    // Handle resend code
    const handleResendCode = () => {
        console.log('Resending code')
        AccessibilityInfo.announceForAccessibility('נשלח קוד אימות נוסף');
        setErrorMessage('')
        setOtpCode('')
        setIsResendModalVisible(true)
    };

    // Back button handler
    const handleBack = () => {
        AccessibilityInfo.announceForAccessibility('חוזר למסך ההזדהות');
        router.back()
    };

    return (
        <SafeAreaView className="flex-1 bg-white ">
            <ScrollView className="flex-1 px-6">
                {/* Back button */}
                <TouchableOpacity
                    className="self-end mt-4 pb-4 pl-4"
                    onPress={handleBack}
                    accessible={true}
                    accessibilityRole='button'
                    accessibilityLabel='כפתור ניווט לעמוד הקודם'
                    accessibilityHint={`הקש כדי לחזור לעמוד הקודם`}
                >
                    <Text className="text-4xl color-primary">→</Text>
                </TouchableOpacity>

                {/* Header */}
                <View className="items-center mt-6 "
                >
                    <Text className="text-2xl font-bold text-center color-primary"
                        accessibilityRole="header"
                    >
                        הזינו את הקוד
                    </Text>


                    <Text className="text-lg text-center mt-6 text-black">
                        שלחנו לך קוד אימות בן 6 ספרות
                        {'\n'}
                        למספר הטלפון &#x200E;{phoneNumber}&#x200E;
                    </Text>
                </View>

                <View className={`w-full border-b mt-20 mb-12 ${isFocused ? 'border-black' : 'border-disabled'} `}>
                    <Text
                        className={`absolute ${isFocused || otpCode.length > 0
                            ? 'text-xs  -top-3'
                            : 'text-lg'}
                            ${isFocused ? 'text-black' : 'color-disabled'}
                            right-0`}
                        importantForAccessibility="no"
                    >
                        קוד האימות:
                    </Text>
                    <TextInput
                        className="w-full py-2 text-right"
                        value={otpCode}
                        onChangeText={(text) => {
                            setOtpCode(text)
                            setErrorMessage('')
                        }}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        keyboardType="number-pad"
                        maxLength={6}
                        accessible={true}
                        accessibilityLabel={`עריכת קוד אימות ${otpCode ? ` כרגע הוזן הקוד ${otpCode.split('').join(' ')}` : ''}`}
                        accessibilityHint='הזן קוד אימות'
                        accessibilityRole='text'
                        returnKeyType='done'
                        accessibilityLanguage='he'
                    />
                </View>

                {/* Didn't receive code section */}
                <View className="mt-8 items-center">
                    <Text className="text-lg"
                        importantForAccessibility="no"
                    >
                        לא הגיע?
                    </Text>
                    <TouchableOpacity
                        className='p-5'
                        onPress={handleResendCode}
                        accessible={true}
                        accessibilityRole='button'
                        accessibilityLabel='כפתור שליחת קוד בשנית'
                        accessibilityLanguage='he'
                    >
                        <Text className="color-link font-semibold text-lg">
                            שלחו לי את הקוד בשנית
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>


            {/* OTP code error message */}
            <View className='mt-auto mb-2 justify-center items-center'>
                {errorMessage &&
                    <Text className='text-error'
                    // this will be read when the code is incorrect
                    >{errorMessage}</Text>
                }
            </View>

            {/* Bottom button */}
            <View className="mb-8 px-6">
                <Button
                    accessabilityLabelHint={'לחץ כדי להמשיך'}
                    label="המשך"
                    onPress={handleContinue}
                    disabled={otpCode.length < 6}

                />
            </View>

            {/* resent OTP modal */}
            <Modal
                visible={isResendModalVisible}
                onClose={() => setIsResendModalVisible(false)}
                title={'הקוד נשלח שוב'}
                buttonText={'אישור'}
                type='alert'
                onButtonPress={() => setIsResendModalVisible(false)}
                accessibilityLabelHint={'לחץ כדי לאשר ולעבור למסך הזנת הקוד'}
            />

            {/* success OTP modal */}
            <Modal
                visible={isSuccessModalVisible}
                onClose={() => setIsSuccessModalVisible(false)}
                title={'הקוד אושר, לחץ אישור על מנת לחזור לאפליקציה'}
                buttonText={'אישור'}
                type='success'
                onButtonPress={() => setIsSuccessModalVisible(false)}
                accessibilityLabelHint={'לחץ אישור בשביל לחזור לאפליקציה'}
            />

        </SafeAreaView >
    );
};

export default OTPScreen