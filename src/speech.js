import * as Speech from 'expo-speech';

export const speak = (text, lang = 'en-US') => {
  Speech.speak(text, { language: lang });
};
