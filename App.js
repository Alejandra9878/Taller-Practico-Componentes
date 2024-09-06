// App.js
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import Greeting from './components/Greeting';
import UserDetails from './components/UserDetails';
import Task from './components/Task'; 
import ToggleText from './components/ToggleText';
import DynamicForm from './components/DynamicForm';
import ClickCounter from './components/ClickCounter';
import RegistrationForm from './components/RegistrationForm';
import ThemeSwitcher from './components/ThemeSwitcher';
import AlertButton from './components/AlertButton';
import ParentCounter from './components/ParentCounter';
import ImageList from './components/ImageList';
import Game from './components/Game';

export default function App() {
  const [userData, setUserData] = useState(null);
  const [theme, setTheme] = useState('light'); // Define el estado para el tema

  const exampleTask = {
    title: 'Hacer la tarea',
    completed: false
  };

  const handleRegister = (data) => {
    setUserData(data);
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const currentStyles = theme === 'light' ? styles.light : styles.dark;

  const alertMessage = "!Este es un mensaje de alerta personalizado!";

  const imageUrls = [
    'https://xtech-frontend.s3.amazonaws.com/media/img/stitch-banner-principal-RS-latino.jpg',
    'https://img.ecartelera.com/noticias/77400/77446-h2.jpg',
  ];

  return (
    <ScrollView style={[styles.container, currentStyles]}>
      <StatusBar style="auto" />
      <Greeting name="Maria" />
      <UserDetails name="Maria" age={28} occupation="Ingeniera" />
      <View style={[styles.tasksContainer, currentStyles]}>
        <Text style={[styles.heading, { color: currentStyles.color }]}>Lista de Tareas</Text>
        <Task task={exampleTask} />
      </View>
      <ToggleText />
      <DynamicForm />
      <View style={[styles.card, currentStyles]}>
        <ClickCounter />
      </View>
      <View style={[styles.card, currentStyles]}>
        <RegistrationForm onSubmit={handleRegister} />
        {userData && (
          <View>
            <Text style={{ color: currentStyles.color }}>Datos Registrados:</Text>
            <Text style={{ color: currentStyles.color }}>Nombre: {userData.name}</Text>
            <Text style={{ color: currentStyles.color }}>Correo: {userData.email}</Text>
            <Text style={{ color: currentStyles.color }}>Contraseña: {userData.password}</Text>
          </View>
        )}
      </View>
      <ThemeSwitcher onToggleTheme={toggleTheme} />
      <AlertButton message={alertMessage} />
      <View style={[styles.card, currentStyles]}>
        <ParentCounter />
      </View>
      <View style={[styles.card, currentStyles]}>
        <ImageList images={imageUrls} />
      </View>
      <View style={[styles.card, currentStyles]}>
        <Game />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  subheading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  light: {
    backgroundColor: '#f0f0f0',
    color: '#000',
  },
  dark: {
    backgroundColor: '#333',
    color: '#fff',
  },
});

