import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const ThemeSwitcher = ({ onToggleTheme }) => {
    return (
        <View style={styles.container}>
            <Button title="Cambiar tema" onPress={onToggleTheme} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
});

export default ThemeSwitcher;


