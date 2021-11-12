import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  FlatList,
} from 'react-native';
import patika_store_data from './data/patika_store_data.json';
import Products from './components/Products';
const numColumns = 2;

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>PATIKA STORE</Text>
      <TextInput style={styles.TextInput} placeholder="Ara..."></TextInput>
      <FlatList
        data={patika_store_data}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Products product={item} />}
        numColumns={numColumns}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'purple',
  },
  TextInput: {
    width: '100%',
    height: '7%',
    backgroundColor: '#eaeaea',
    borderRadius: 5,
    marginTop: 8,
  },
});

export default App;
