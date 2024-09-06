import React from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';

const ImageList = ({ images }) => {
  return (
    <ScrollView horizontal style={styles.container}>
      {images.map((image, index) => (
        <Image
          key={index}
          source={{ uri: image }} 
          style={styles.image}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  image: {
    width: 150,
    height: 150,
    marginRight: 10,
  },
});

export default ImageList;