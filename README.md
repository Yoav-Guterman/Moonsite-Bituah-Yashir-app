-- React Native Project - Bituh Yashir Demo --

This project is a React Native application that focuses on react native basics with accessibility implementation for mobile apps. 

The application consists of two main screens:
first screen - welcome screen: user identification entry with terms acceptance and otp code option sms/email/whatsapp

second screen - otp screen: otp code entry with modals for success and resend the otp code.



-- Accessibility features implemented --

1. Screen Reader Support

- All interactive elements have appropriate accessibilityLabel, accessibilityRole, and accessibilityHint properties and more.
- Hebrew language support.
Screen announcements using AccessibilityInfo.announceForAccessibility().
- Proper focus management between screens.

2. Visual Accessibility

- High contrast colors for better readability
- Larger font sizes (text-lg, text-2xl, etc.) for better visibility
- Error messages with appropriate color coding

3. Touch Target Accessibility

- Large touchable areas for buttons with extra padding
- Proper spacing between interactive elements

4. RTL Support

- Right-to-left layout support for Hebrew using I18nManager.forceRTL(true)
- Text alignment appropriate for Hebrew



-- The application was tested with --

1. Screen readers (VoiceOver on iOS, TalkBack on Android)
2. Different device sizes (android and IOS emulator)
3. Different text size settings


-- Testing Results --

1. Android: The application worked well with TalkBack, all elements were properly navigable
2. iOS: Most functionality worked correctly with VoiceOver, but i encountered an issue with modal focus management when reopening modals.
3. The application rendered properly on different device sizes 
4. All text remained readable at different system font sizes * but the bold font in the android made a problem *



-- Known Limitations -- 

1. Full keyboard focus navigation was not implemented (focus is limited to interactive elements via screen readers)
2. The iOS modal focus issue requires further refinement
3. On IOS The application was primarily tested on iphone emulator rather than physical device
4. I am not sure about the project folder structure. i have seen a few in the internet, so i took inspiration from one that i liked



-- Why i chose Expo CLI --
I chose to run the application on Expo CLI instead of React native CLI for a few reasons:

1. Official recommendation from React Native documentation as the preferred way to get started
2. Easier setup for running and testing on phone / emulator
3. Rich documentation and community support
4. Built-in features that simplify development



-- How to run the application --

1. Clone the repository
2. Run in the terminal: npm install or yarn install
3. Run in the terminal: npx expo start
4. This will start the Expo development server. From there you can:
- Press i to open in iOS simulator
- Press a to open in Android emulator
- Scan the QR code with the * Expo Go app on your device *


-- Development Timeline --
The project was completed (and learned) in stages over a period of a week:

1. In the first days i learned react native and built demo applications with some guides i found online
2. In wednesday i started building the project setup (structure, tailwind) -about 2 hours-

3. In thursday i built the first page
-about 3 hours-

4. In friday i built the second page
-about 6 hours-

5. In saturday i made the accessibility and documentation.
-about 10 hours-