
import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

const Greeting = ({ name }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hola, {name}!</Text>
    </View>
  );
};

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Greeting;
