import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function DetailsScreen({ route }) {
  const { anime } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: anime.image }} style={styles.image} />
      <Text style={styles.title}>{anime.title}</Text>
      <Text style={styles.details}>Rank: {anime.rank}</Text>
      <Text style={styles.details}>
        Description: Explore the amazing storyline and characters of {anime.title}.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  image: {
    width: 200,
    height: 300,
    resizeMode: 'cover',
    marginBottom: 16,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  details: {
    fontSize: 16,
    marginVertical: 8,
    textAlign: 'center',
  },
});
