import Button from '@/components/button/Button';
import SendCodeOptions from '@/components/sendCodeOptions/SendCodeOptions';
import { OptionType } from '@/components/sendCodeOptions/types';
import TermsCheckbox from '@/components/termsCheckbox/TermsCheckbox';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { AccessibilityInfo, Image, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native';

const WelcomeScreen = () => {
    // expo router
    const router = useRouter();
    // Form state
    const [agreedToTerms, setAgreedToTerms] = useState<boolean>(false)
    const [selectedOption, setSelectedOption] = useState<OptionType>('SMS')
    const [idNumber, setIdNumber] = useState<string>('')
    const [isFocused, setIsFocused] = useState<boolean>(false)
    const [isInputActive, setIsInputActive] = useState<boolean>(false)

    const handleSendCode = () => {
        // Handle button press
        console.log(`Sending code via ${selectedOption}`);
        console.log(`id is ${idNumber} \n sent and agreed the policy ${agreedToTerms}`)
        AccessibilityInfo.announceForAccessibility('קוד האימות נשלח, עובר למסך הזנת הקוד')
        router.push("/screens/otpScreen/OTPScreen")
    };

    return (
        <SafeAreaView className="flex-1 bg-white">
            <ScrollView className="flex-1 px-6">
                <View className="items-center mt-10"

                >

                    {/* Header text */}
                    <Text className="text-3xl font-black text-center color-primary"
                        accessibilityRole="header"
                        accessibilityLanguage='he'
                        accessible={true}
                    >
                        היי בוריס,
                        {'\n'}
                        כיף שחזרת אלינו!
                    </Text>

                    {/* bituh yashir picture */}
                    <View className="w-64 h-64 items-center justify-center">
                        <Image
                            source={require('../../../assets/images/bituh-yashir-image.jpeg')}
                            className='w-64 h-64'
                            resizeMode="contain"
                        />
                    </View>

                    {/* passport / id field */}
                    <View className={`w-full border-b mt-12 mb-2 
                    ${isInputActive && idNumber.length === 0 ? 'border-error' :
                            isFocused ? 'border-black' : 'border-inactive'} 
                    `}
                    >

                        <Text
                            style={{ direction: 'rtl' }}
                            className={`absolute 
                                ${isFocused || idNumber.length > 0
                                    ? 'text-xs -top-3'
                                    : 'text-base'
                                } 
                                ${isInputActive && idNumber.length === 0 ? 'text-error' :
                                    isFocused ? 'text-black' : 'color-disabled'}
                                right-0`}
                            importantForAccessibility="no"
                        >
                            תעודת זהות / דרכון
                        </Text>
                        <TextInput
                            className="w-full py-2 text-right"
                            value={idNumber}
                            onChangeText={(text) => { setIdNumber(text) }}
                            onFocus={() => {
                                setIsFocused(true)
                                setIsInputActive(true)
                            }}
                            onBlur={() => setIsFocused(false)}
                            keyboardType="number-pad"
                            maxLength={9}
                            accessible={true}
                            accessibilityLabel={`עריכת תעודת זהות או דרכון ${idNumber
                                ? ` כרגע הוזן: ${idNumber.split('').join(' ')}`
                                : ''
                                }`}
                            accessibilityHint='הזן תעודת זהות או דרכון'
                            accessibilityRole='text'
                            returnKeyType='done'
                            accessibilityLanguage='he'
                            focusable={true}
                        />

                    </View>

                    <View className='mb-4 w-full'>
                        {isInputActive && idNumber.length === 0 &&
                            <Text className='text-base text-error w-full text-right'>שדה חובה</Text>
                        }

                    </View>

                    {/* Terms checkbox */}
                    <TermsCheckbox
                        checked={agreedToTerms}
                        onToggle={() => setAgreedToTerms(!agreedToTerms)}
                    />

                    {/* for extra margin */}
                    <View className='mb-8'></View>

                    {/* Send code options */}
                    <SendCodeOptions
                        selectedOption={selectedOption}
                        onSelectOption={setSelectedOption}
                    />

                    {/* for extra margin */}
                    <View className='mb-8'></View>


                    {/* Send code button */}
                    <Button
                        label={`שלחו לי את הקוד ב-${selectedOption}`}
                        accessabilityLabelHint={`שלחו לי את הקוד ב-${selectedOption}`}
                        onPress={handleSendCode}
                        disabled={!agreedToTerms || idNumber.length < 1}
                    />

                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default WelcomeScreen;