import Button from '@/components/button/Button';
import Checkbox from '@/components/checkbox/Checkbox';
import SendCodeOptions from '@/components/sendCodeOptions/SendCodeOptions';
import { OptionType } from '@/components/sendCodeOptions/types';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native';

const WelcomeScreen = () => {
    const router = useRouter();
    // Form state
    const [agreedToTerms, setAgreedToTerms] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<OptionType>('SMS');
    const [idNumber, setIdNumber] = useState<string>('');
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const handleSendCode = () => {
        // Handle button press
        console.log(`Sending code via ${selectedOption}`);
        console.log(`id is ${idNumber} \n sent and agreed the policy ${agreedToTerms}`)
        router.push("/screens/otpScreen/OTPScreen");
    };

    return (
        <SafeAreaView className="flex-1 bg-white">
            <ScrollView className="flex-1 px-6">
                <View className="items-center mt-10">
                    {/* Header text */}
                    <Text className="text-3xl font-black text-center text-blue-950">
                        היי בוריס,
                    </Text>
                    <Text className="text-3xl font-black text-center mb-8 text-blue-950">
                        כיף שחזרת אלינו!
                    </Text>

                    <View className="w-64 h-64 items-center justify-center">
                        <Image
                            source={require('../../../assets/images/bituh-yashir-image.jpeg')}
                            style={{ width: 250, height: 250 }}
                            resizeMode="contain"
                        />
                    </View>

                    <View className="w-full mb-4 border-b border-gray-300 mt-12 mb-12">
                        <Text
                            className={`absolute ${isFocused || idNumber.length > 0
                                ? 'text-xs text-blue-900 -top-3'
                                : 'text-base text-gray-500'
                                } right-0`}
                        >
                            תעודת זהות / דרכון
                        </Text>
                        <TextInput
                            className="w-full py-2 text-right"
                            value={idNumber}
                            onChangeText={(text) => { setIdNumber(text) }}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            keyboardType="number-pad"
                            maxLength={9}
                        />
                    </View>

                    <View className='mb-8'></View>

                    {/* Terms checkbox */}
                    <Checkbox
                        label="אישרתי את תנאי השימוש ואת תקנון מועדון ישיר"
                        checked={agreedToTerms}
                        onToggle={() => setAgreedToTerms(!agreedToTerms)}
                    />

                    <View className='mb-8'></View>


                    {/* Send code options */}
                    <SendCodeOptions
                        selectedOption={selectedOption}
                        onSelectOption={setSelectedOption}
                    />

                    <View className='mb-8'></View>

                    {/* Send code button */}
                    <Button
                        label={`שלחו לי את הקוד ב-${selectedOption}`}
                        onPress={handleSendCode}
                        disabled={!agreedToTerms || idNumber.length < 1}
                    />

                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default WelcomeScreen;