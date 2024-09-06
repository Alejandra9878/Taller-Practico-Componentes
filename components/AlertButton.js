import React from 'react';
import { View, Button, StyleSheet, Alert } from 'react-native';

const AlertButton = ({ message }) => {
    const handlePress = () => {
        Alert.alert(message);
    };

    return (
        <View style={styles.container}>
            <Button title="Mostrar Alerta" onPress={handlePress} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
});

export default AlertButton;
