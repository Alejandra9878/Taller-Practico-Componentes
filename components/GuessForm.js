// GuessForm.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const GuessForm = ({ correctAnswer }) => {
    const [guess, setGuess] = useState('');
    const [result, setResult] = useState('');

    const handleGuess = () => {
        if (guess.trim().toLowerCase() === correctAnswer.toLowerCase()) {
            setResult('¡Correcto!');
        } else {
            setResult('Incorrecto. Inténtalo de nuevo.');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Escribe tu adivinanza aquí"
                value={guess}
                onChangeText={setGuess}
            />
            <Button title="Enviar" onPress={handleGuess} />
            {result && <Text style={styles.result}>{result}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        maxWidth: 300,
        alignItems: 'center',
    },
    input: {
        width: '100%',
        borderColor: '#ddd',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
    },
    result: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default GuessForm;
