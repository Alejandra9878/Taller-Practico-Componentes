
import React, { useState } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

function Task({ task }) {
  const [isCompleted, setIsCompleted] = useState(task.completed);

  const toggleCompletion = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{task.title}</Text>
      <Text style={styles.status}>{isCompleted ? 'Completada' : 'No completada'}</Text>
      <Button
        title={isCompleted ? 'Marcar como no completada' : 'Marcar como completada'}
        onPress={toggleCompletion}
      />
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      marginBottom: 15,
      padding: 15,
      borderRadius: 10,
      backgroundColor: '#f9f9f9',
      borderColor: '#ddd',
      borderWidth: 1,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 3, 
      alignItems: 'center',
    },

    title: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
    },
    status: {
      fontSize: 16,
      marginVertical: 5,
      color: '#666',
    },
    completed: {
      backgroundColor: '#dff0d8',
      borderColor: '#d0e9c6',
    },
  });

export default Task;

