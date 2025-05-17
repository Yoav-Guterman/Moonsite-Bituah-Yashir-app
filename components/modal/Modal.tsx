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
            visible={visible}
            transparent={true}
            animationType="fade"
            accessibilityViewIsModal={true}
        >
            <View className="flex-1 bg-black/50 justify-center items-center"
                accessible={true}
                accessibilityLabel={type === 'success' ? "הודעת הצלחה" : "הודעת התראה"}
            >
                <View className="bg-white rounded-lg w-4/5 p-6 items-center">
                    {/* Close button */}
                    <TouchableOpacity
                        className="absolute top-3 right-3"
                        onPress={onClose}
                        accessible={true}
                        accessibilityLabel="סגור"
                        accessibilityRole="button"
                        accessibilityHint="סגור את החלון"
                    >
                        <Text className="text-xl">x</Text>
                    </TouchableOpacity>

                    {/* Alert icon */}
                    <View className="w-12 h-12 rounded-full border border-gray-400 items-center justify-center mb-4"
                        importantForAccessibility="no"
                    >
                        <Text className="text-2xl">{type === 'success' ? '✓' : '!'}</Text>
                    </View>

                    {/* Message */}
                    <Text className="text-lg font-bold mb-6 text-center"
                        accessible={true}
                    >
                        {title}
                    </Text>

                    {/* Confirm button */}
                    <TouchableOpacity
                        className="bg-blue-900 py-3 rounded-full mt-auto h-12 px-12 w-full"
                        onPress={onButtonPress}
                    >
                        <Text className="text-white font-medium flex-1 text-center"
                            accessible={true}
                            accessibilityLabel={buttonText}
                            accessibilityHint={accessibilityLabelHint}
                            accessibilityRole="button"
                        >{buttonText}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </DynamicModal>
    )
}


export default Modal