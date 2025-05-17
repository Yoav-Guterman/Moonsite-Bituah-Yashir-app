import React from 'react'
import { Modal as DynamicModal, Text, TouchableOpacity, View } from 'react-native'
import { ModalProps } from './types'

const Modal = ({
    visible,
    onClose,
    title,
    type,
    buttonText,
    onButtonPress,
    accessibilityLabelHint
}: ModalProps) => {

    return (
        <DynamicModal
            accessible={true}
            visible={visible}
            transparent={true}
            animationType="fade"
            accessibilityViewIsModal={true}
            onRequestClose={onClose}
            accessibilityLanguage='he'
        >
            <View className="flex-1 bg-black/50 justify-center items-center"
                accessible={false}
            >
                <View className="bg-white rounded-lg w-4/5 p-6 items-center"
                    accessible={false}>
                    {/* Close button */}
                    <TouchableOpacity
                        className="absolute top-3 right-3 pl-8 pb-4"
                        onPress={onClose}
                        accessible={true}
                        accessibilityLabel="סגור"
                        accessibilityRole="button"
                        accessibilityHint="סגור את החלון"
                        accessibilityLanguage='he'
                        focusable={true}
                    >
                        <Text className="text-2xl">x</Text>
                    </TouchableOpacity>

                    {/* Alert icon */}
                    <View className="w-12 h-12 rounded-full border-2 border-disabled items-center justify-center mb-4"
                        importantForAccessibility="no"
                    >
                        <Text className="text-3xl"
                            importantForAccessibility="no"
                        >{type === 'success' ? '✓' : '!'}</Text>
                    </View>

                    {/* Message */}
                    <Text className="text-lg font-bold mb-6 text-center text-primary"
                        accessible={true}
                    >
                        {title}
                    </Text>

                    {/* Confirm button */}
                    <TouchableOpacity
                        className="bg-primary py-2 rounded-full mt-auto h-12 px-12 w-full"
                        onPress={onButtonPress}
                        focusable={true}
                        accessible={true}
                        accessibilityLabel={buttonText}
                        accessibilityHint={accessibilityLabelHint}
                        accessibilityRole="button"
                        accessibilityLanguage='he'
                    >
                        <Text className="text-white font-medium flex-1 text-center text-lg"

                        >{buttonText}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </DynamicModal>
    )
}


export default Modal