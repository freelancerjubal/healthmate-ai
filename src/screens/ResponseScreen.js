import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { speak } from '../speech';
import i18n from '../i18n';

export default function ResponseScreen({ route, navigation }) {
  const { advice } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{i18n.t('advice')}</Text>
      <Text style={styles.advice}>{advice}</Text>
      <Button
        title={i18n.t('speakAgain')}
        onPress={() => speak(advice, i18n.locale === 'bn' ? 'bn-BD' : 'en-US')}
      />
      <Button title={i18n.t('back')} onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  advice: {
    fontSize: 16,
    marginBottom: 20,
  },
});
