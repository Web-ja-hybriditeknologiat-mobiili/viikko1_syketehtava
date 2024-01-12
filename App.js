import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [age, setAge] = useState('');
  const [heartRateLimits, setHeartRateLimits] = useState({ lower: 0, upper: 0 });

  
  function calculate() {
    const ageNumber = parseFloat(age);
    const lowerLimit = Math.round((220 - ageNumber) * 0.65);
    const upperLimit = Math.round((220 - ageNumber) * 0.85);

    setHeartRateLimits({ lower: lowerLimit, upper: upperLimit });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age</Text>
      <TextInput
        style={styles.input}
        keyboardType='decimal-pad'
        value={age}
        onChangeText={(text) => setAge(text)}
      />

      <Text style={styles.field}>HR limits</Text>
      <Text style={styles.resultText}>
      {heartRateLimits.lower} - {heartRateLimits.upper} bpm
      </Text>
      <Button onPress={calculate} title="Calculate" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
    padding: 8,
  },
  field: {
    marginBottom: 8,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
  },
  resultText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});
