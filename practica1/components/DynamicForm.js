import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

function DynamicForm () {
  const [inputText, setInputText] = useState('');
  const [submittedText, setSubmittedText] = useState('');

  // Maneja el cambio en el campo de texto
  const handleChange = (text) => {
    setInputText(text);
  };

  // Maneja el envío del formulario
  const handleSubmit = () => {
    setSubmittedText(inputText);
    setInputText(''); // Opcional: Limpia el campo de texto después de enviar
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Escribe algo..."
        value={inputText}
        onChangeText={handleChange}
      />
      <Button
       title='Enviar'
       onPress={handleSubmit}
       />

      {submittedText ? (
        <Text style={styles.result}>Texto ingresado: {submittedText}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    width: '100%',
    paddingHorizontal: 10,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    color: '#333',
  },
});

export default DynamicForm;
