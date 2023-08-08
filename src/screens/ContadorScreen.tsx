import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { Fab } from '../components/Fab';

export const ContadorScreen = () => {
  const [contador, setContador] = useState(10);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isButtonVisible, setIsButtonVisible] = useState(false); // Estado para controlar la visibilidad del botón

  // Array of image URIs or paths for background images
  const backgroundImages = [
    require('../imagenes/1.jpg'),
    require('../imagenes/2.jpg'),
    require('../imagenes/3.jpg'),
    require('../imagenes/4.jpg'),
    require('../imagenes/5.jpg'),
    require('../imagenes/6.jpg'),
  ];

  // Function to handle the background image change
  const changeBackgroundImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
  };

  // Function to handle showing the button in the last image
  const showButtonInLastImage = () => {
    if (currentImageIndex === backgroundImages.length - 1) {
      setIsButtonVisible(true);
    } else {
      setIsButtonVisible(false);
    }
  };

  // Call the showButtonInLastImage function whenever the currentImageIndex changes
  React.useEffect(() => {
    showButtonInLastImage();
  }, [currentImageIndex]);

  return (
    <ImageBackground
      source={backgroundImages[currentImageIndex]}
      style={styles.container}
    >
      {/* Texto dentro del botón azul */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Contador: {contador}</Text>
      </TouchableOpacity>

      {/* +1 Button */}
      <Fab
        title="+1"
        onPress={() => setContador(contador + 1)}
        style={{ bottom: 10, left: 10 }} // Botón en la esquina inferior izquierda
      />

      {/* -1 Button */}
      <Fab
        title="-1"
        onPress={() => setContador(contador - 1)}
        style={{ bottom: 10, right: 10 }} // Botón en la esquina inferior derecha
      />

      {/* Change Background Image Button */}
      <TouchableOpacity
        style={styles.changeImageButton}
        onPress={changeBackgroundImage}
      >
        <View style={styles.fab}>
          <Text style={styles.fabText}>Fondo</Text>
        </View>
      </TouchableOpacity>

      {/* Carlos Cruz Button */}
      {isButtonVisible && (
        <TouchableOpacity style={styles.carlosCruzButton}>
          <Text style={styles.carlosCruzButtonText}>Carlos Cruz 2019-1185</Text>
        </TouchableOpacity>
      )}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 20, // Bordes redondos
    padding: 10, // Espaciado interno del botón
    alignSelf: 'center', // Alineación del botón
  },
  buttonText: {
    color: 'white',
    fontSize: 40,
    textAlign: 'center',
  },
  changeImageButton: {
    alignSelf: 'center',
    marginVertical: 10,
  },
  fab: {
    backgroundColor: 'blue',
    borderRadius: 50,
    width: 180,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    top: 30,
  },
  fabText: {
    color: 'white',
    fontSize: 18,
  },
  carlosCruzButton: {
    backgroundColor: 'blue',
    borderRadius: 20, // Bordes redondos
    padding: 10, // Espaciado interno del botón
    alignSelf: 'center', // Alineación del botón
    marginTop: 30, // Separación desde la parte superior
    marginBottom: -200, // Separación desde la parte inferior
  },
  carlosCruzButtonText: {
    color: 'white',
    fontSize: 20, // Tamaño de fuente
    textAlign: 'center',
  },
});
