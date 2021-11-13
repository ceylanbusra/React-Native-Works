import React, {useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  Image,
  TextInput,
} from 'react-native';
import music_data from './src/data/music_data.json';
import SongCard from './src/components/SongCard';

const App = () => {
  const [List, setList] = useState(music_data);
  //render Itemın içine componenti yolladık.
  const renderItem = ({item}) => <SongCard song={item} />;
  //bu fonksiyonda önce textinputtan gelen değeri yolları daha sonra da datayı filtreleme işlemi yaptık.
  // Daha sonra TextInputtaki her bir değerin index olarak textini aldı ve o anki nesnenin titleina attı varsa o değeri döndürdü.
  const handleValue = value => {
    const filterList = music_data.filter(song => {
      const searchedTitle = value.toLowerCase(); //o anki aranılan kelimeyi alır küçük harf yapar
      const currenTitle = song.title.toLowerCase(); // o anki nesnedeki titleı alır küçük harf yapar.
      return currenTitle.indexOf(searchedTitle) > -1;
    });
    setList(filterList);
  };
  return (
    <SafeAreaView style={styles.safeAreContainer}>
      <TextInput
        placeholder="Ara.."
        style={styles.input}
        onChangeText={handleValue}></TextInput>
      <FlatList
        data={List}
        keyExtractor={item => item.id}
        renderItem={renderItem}></FlatList>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  input: {
    backgroundColor: 'grey',
    width: '100%',
    height: '8%',
    borderRadius: 8,
  },
  safeAreContainer: {
    flex: 1,
    padding: 10,
  },
});

export default App;
