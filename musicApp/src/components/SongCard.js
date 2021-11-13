import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
} from 'react-native';
import music_data from '../data/music_data.json';

const SongCard = props => {
  return (
    <SafeAreaView style={styles.SafeAreaViewContainer}>
      <Image style={styles.image} source={{uri: props.song.imageUrl}}></Image>
      <View style={styles.firstContainer}>
        <Text style={styles.textTitle}>{props.song.title}</Text>
        <View style={styles.secondContainer}>
          <Text style={{fontSize: 15}}>{props.song.artist}</Text>
          {props.song.isSoldOut && (
            <Text style={{fontSize: 20, color: 'red'}}>Tükendi</Text>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  firstContainer: {
    flex: 1,
    margin: 8,
  },
  SafeAreaViewContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
  },

  secondContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  innerContainer: {
    justifyContent: 'center',
  },
});

export default SongCard;
