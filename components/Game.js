// Game.js
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import GuessForm from './GuessForm';

const Game = () => {
    // Estado para la respuesta correcta
    const [correctAnswer, setCorrectAnswer] = useState('React Native');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Adivina la Tecnología</Text>
            <GuessForm correctAnswer={correctAnswer} />
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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});

export default Game;
