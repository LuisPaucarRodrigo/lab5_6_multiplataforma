import {View, Text, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native'
import React from 'react'

const Peliculas = () => {
  const movies = [
    {
      title: 'Interstellar',
      year: 2014,
      director: 'Christopher Nolan',
      image: require('../images/interstellar.jpg'),
    },
    {
      title: 'The Shawshank Redemption',
      year: 1994,
      director: 'Frank Darabont',
      image: require('../images/shawshank_redemption.jpg'),
    },
    {
      title: 'Inception',
      year: 2010,
      director: 'Christopher Nolan',
      image: require('../images/inception.jpg'),
    },
  ];

  const handleMoviePress = (movie) => {
    navigation.navigate('MovieDetails', { movie });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Películas populares</Text>
      {movies.map((movie, index) => (
        <View key={index} style={styles.movieContainer}>
          <TouchableOpacity key={index} style={styles.movieContainer} onPress={() => handleMoviePress(movie)}>
          <Image source={movie.image} style={styles.movieImage} />
          <Text style={styles.movieTitle}>{movie.title}</Text>
          <Text style={styles.movieInfo}>
            Año: {movie.year} - Director: {movie.director}
          </Text>
        </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  movieContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  movieImage: {
    width: 200,
    height: 300,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  movieInfo: {
    fontSize: 16,
  },
});

export default Peliculas