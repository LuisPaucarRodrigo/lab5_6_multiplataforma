import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Bienvenido a la página de inicio!</Text>
      <Text style={styles.subtitle}>Aquí puedes comenzar a construir tu aplicación.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default Home;