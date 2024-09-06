import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import ChildCounter from './ChildCounter'; // Asegúrate de que la ruta sea correcta

const ParentComponent = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(prevCount => prevCount + 1);
    };

    return (
        <View style={styles.container}>
            <Text>Contador en el componente padre:</Text>
            <ChildCounter count={count} onIncrement={incrementCount} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ParentComponent;
