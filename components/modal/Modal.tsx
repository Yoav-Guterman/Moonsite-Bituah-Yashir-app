import React from 'react'
import { Modal as DynamicModal, Text, TouchableOpacity, View } from 'react-native'
import { ModalProps } from './types'

const Modal = ({
    visible,
    onClose,
    title,
    type,
    buttonText,
    onButtonPress
}: ModalProps) => {

    return (
        <DynamicModal
            visible={visible}
            transparent={true}
            animationType="fade"
        >
            <View className="flex-1 bg-black/50 justify-center items-center">
                <View className="bg-white rounded-lg w-4/5 p-6 items-center">
                    {/* Close button */}
                    <TouchableOpacity
                        className="absolute top-3 right-3"
                        onPress={onClose}
                    >
                        <Text className="text-xl">x</Text>
                    </TouchableOpacity>

                    {/* Alert icon */}
                    <View className="w-12 h-12 rounded-full border border-gray-400 items-center justify-center mb-4">
                        <Text className="text-2xl">{type === 'success' ? '✓' : '!'}</Text>
                    </View>

                    {/* Message */}
                    <Text className="text-lg font-bold mb-6 text-center">
                        {title}
                    </Text>

                    {/* Confirm button */}
                    <TouchableOpacity
                        className="bg-blue-900 py-3 rounded-full mt-auto h-12 px-12 w-full"
                        onPress={onButtonPress}
                    >
                        <Text className="text-white font-medium flex-1 text-center">{buttonText}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </DynamicModal>
    )
}


export default Modal