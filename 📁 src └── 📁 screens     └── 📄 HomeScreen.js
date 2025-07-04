import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { speak } from '../speech';
import { fetchHealthAdvice } from '../api';
import i18n from '../i18n';

export default function HomeScreen({ navigation }) {
  const [input, setInput] = useState('');

  const handleSubmit = async () => {
    const advice = await fetchHealthAdvice(input);
    speak(advice, i18n.locale === 'bn' ? 'bn-BD' : 'en-US');
    navigation.navigate('Response', { advice });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{i18n.t('ask')}</Text>
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={setInput}
        placeholder={i18n.t('enterSymptoms')}
      />
      <Button title={i18n.t('getAdvice')} onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
});
import IconTextInput from '../components/IconTextInput';

// ...

<IconTextInput
  icon="healing"
  value={input}
  onChangeText={setInput}
  placeholder={i18n.t('enterSymptoms')}
/>
