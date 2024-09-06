import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ClickCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.count}>Clics: {count}</Text>
      <Button title="Incrementar" onPress={() => setCount(count + 1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
  },
  count: {
    fontSize: 20,
    marginBottom: 10,
  },
});

export default ClickCounter;