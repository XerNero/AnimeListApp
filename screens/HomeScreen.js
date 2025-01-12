import React from 'react';
import { View, FlatList, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const animeList = [
  {
    id: '1',
    title: 'Fullmetal Alchemist: Brotherhood',
    rank: 1,
    image: 'https://cdn.myanimelist.net/images/anime/1223/96541.jpg',
  },
  {
    id: '2',
    title: 'Attack on Titan Final Season Part 2',
    rank: 2,
    image: 'https://cdn.myanimelist.net/images/anime/1000/110731.jpg',
  },
  {
    id: '3',
    title: 'Steins;Gate',
    rank: 3,
    image: 'https://cdn.myanimelist.net/images/anime/5/73199.jpg',
  },
  {
    id: '4',
    title: 'Gintama',
    rank: 4,
    image: 'https://cdn.myanimelist.net/images/anime/10/73274.jpg',
  },
  {
    id: '5',
    title: 'Hunter x Hunter (2011)',
    rank: 5,
    image: 'https://cdn.myanimelist.net/images/anime/1337/99013.jpg',
  },
  {
    id: '6',
    title: 'One Piece',
    rank: 6,
    image: 'https://cdn.myanimelist.net/images/anime/6/73245.jpg',
  },
  {
    id: '7',
    title: 'Demon Slayer: Kimetsu no Yaiba',
    rank: 7,
    image: 'https://cdn.myanimelist.net/images/anime/1286/99889.jpg',
  },
  {
    id: '8',
    title: 'My Hero Academia',
    rank: 8,
    image: 'https://cdn.myanimelist.net/images/anime/10/78745.jpg',
  },
  {
    id: '9',
    title: 'Naruto: Shippuuden',
    rank: 9,
    image: 'https://cdn.myanimelist.net/images/anime/5/17407.jpg',
  },
  {
    id: '10',
    title: 'Jujutsu Kaisen',
    rank: 10,
    image: 'https://cdn.myanimelist.net/images/anime/1171/109222.jpg',
  },
  {
    id: '11',
    title: 'Bleach: Thousand-Year Blood War',
    rank: 11,
    image: 'https://cdn.myanimelist.net/images/anime/1196/123985.jpg',
  },
  {
    id: '12',
    title: 'Death Note',
    rank: 12,
    image: 'https://cdn.myanimelist.net/images/anime/9/9453.jpg',
  },
  {
    id: '13',
    title: 'Code Geass: Lelouch of the Rebellion',
    rank: 13,
    image: 'https://cdn.myanimelist.net/images/anime/5/50331.jpg',
  },
  {
    id: '14',
    title: 'Dragon Ball Z',
    rank: 14,
    image: 'https://cdn.myanimelist.net/images/anime/1127/124902.jpg',
  },
  {
    id: '15',
    title: 'Black Clover',
    rank: 15,
    image: 'https://cdn.myanimelist.net/images/anime/2/88336.jpg',
  },
  {
    id: '16',
    title: 'Sword Art Online',
    rank: 16,
    image: 'https://cdn.myanimelist.net/images/anime/11/39717.jpg',
  },
  {
    id: '17',
    title: 'Tokyo Ghoul',
    rank: 17,
    image: 'https://cdn.myanimelist.net/images/anime/5/64449.jpg',
  },
  {
    id: '18',
    title: 'Chainsaw Man',
    rank: 18,
    image: 'https://cdn.myanimelist.net/images/anime/1212/126728.jpg',
  },
  {
    id: '19',
    title: 'Vinland Saga',
    rank: 19,
    image: 'https://cdn.myanimelist.net/images/anime/1434/99325.jpg',
  },
  {
    id: '20',
    title: 'Re:Zero - Starting Life in Another World',
    rank: 20,
    image: 'https://cdn.myanimelist.net/images/anime/11/79410.jpg',
  },
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={animeList}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Details', { anime: item })}
          >
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.title}>{`${item.rank}. ${item.title}`}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 10,
  },
  card: {
    flex: 1,
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 5,
  },
});
