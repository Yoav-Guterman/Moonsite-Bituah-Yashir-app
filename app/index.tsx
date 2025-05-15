import WelcomeScreen from '@/src/screens/welcomeScreen/WelcomeScreen';
import React from 'react';
import { I18nManager } from 'react-native';

// Enable RTL for Hebrew
I18nManager.allowRTL(true);
I18nManager.forceRTL(true);

export default function App() {

  return <WelcomeScreen />;
}