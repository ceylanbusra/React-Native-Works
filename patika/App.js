import React, {useState} from 'react';
import {Button, SafeAreaView, Text, StyleSheet, View} from 'react-native';
import sorular from './data/sorular.json';
import soruModel from './component/soruModel';

const App = () => {
  let gelensorular = [];
  let i;
  gelensorular = sorular;
  console.log(gelensorular);
  console.log(gelensorular.length);
  const [cevap, setCevap] = useState(false);
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text>Fitness App</Text>
     
  <soruModel/>
    </SafeAreaView>
  );
};
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
export default App;
