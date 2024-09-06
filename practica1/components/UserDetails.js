
import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

const UserDetails = ({ name, age, occupation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nombre:</Text>
      <Text style={styles.value}>{name}</Text>
      <Text style={styles.label}>Edad:</Text>
      <Text style={styles.value}>{age}</Text>
      <Text style={styles.label}>Ocupación:</Text>
      <Text style={styles.value}>{occupation}</Text>
    </View>
  );
};

UserDetails.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  occupation: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default UserDetails;
