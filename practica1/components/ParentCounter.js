import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ChildCounter from './ChildCounter';

const ParentCounter = () => {
    const [count, setCount] = useState(0);

    const incrementCounter = () => {
        setCount(prevCount => prevCount + 1);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Contador del Padre: {count}</Text>
            <ChildCounter count={count} onIncrement={incrementCounter} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: 'center',
    },
    heading: {
        fontSize: 18,
        marginBottom: 10,
    },
});

export default ParentCounter;

