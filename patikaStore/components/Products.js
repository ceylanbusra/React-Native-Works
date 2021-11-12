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
  Image,
  Dimensions,
} from 'react-native';

const Products = props => {
  console.log(props);
  return (
    <View style={styles.container}>
      <Image style={styles.Image} source={{uri: props.product.imgURL}}></Image>

      <Text style={styles.title}>{props.product.title}</Text>
      <Text style={styles.price}>{props.product.price}</Text>

      <Text style={styles.Stock}>
        {props.product.inStock ? '' : 'Stokta Yok!'}{' '}
      </Text>
    </View>
  );
};
export default Products;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#eaeaea',
    margin: 5,
    alignItems: 'center',
    padding: 4,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  Image: {
    resizeMode: 'stretch',
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').height / 4,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  Stock: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
});
