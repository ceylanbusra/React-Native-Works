import React, {useState} from 'react';
import {View, SafeAreaView, Text, Button, StyleSheet} from 'react-native';

const soruModel = (props) => {
  return (
    <View style={styles.Container}>
      <Text>gsdfgsdfgsdfg</Text>
      <View style={styles.Button}>
        <Button title="Evet"></Button>
        <Button title="Hayır"></Button>
      </View>
    </View>
  );
};
export default soruModel;
const styles = StyleSheet.create({
  Container: {
    Width: 100,
    height: 100,
    backgroundColor: '#f0f0f0',
  },
  Button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
});

