import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ToggleText = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Button
        title={isVisible ? 'Ocultar Texto' : 'Mostrar Texto'}
        onPress={() => setIsVisible(!isVisible)}
        color="#007BFF"
      />
      {isVisible && <Text style={styles.text}>¡Texto Visible!</Text>}
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
  text: {
    marginTop: 20,
    fontSize: 18,
    color: '#333',
  },
});

export default ToggleText;


