import axios from 'axios';
import { OPENAI_API_KEY } from '@env';
import i18n from './i18n';

export const fetchHealthAdvice = async (input) => {
  const prompt =
    i18n.locale === 'bn'
      ? `ব্যবহারকারীর উপসর্গ: ${input}. সহজ বাংলায় ব্যাখ্যা ও পরামর্শ দাও।`
      : `User has symptoms: ${input}. Provide a simple health explanation and advice in English.`;

  const res = await axios.post(
    'https://api.openai.com/v1/chat/completions',
    {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
    },
    {
      headers: {
        Authorization: `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
    }
  );

  return res.data.choices[0].message.content;
};
npx expo install @expo/vector-icons
