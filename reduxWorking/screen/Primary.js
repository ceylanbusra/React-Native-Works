import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import {addToName} from '../context/Actions';
const Primary = ({item}) => {
  const dispatch = useDispatch();
  const [text, setText] = useState();
  console.log('0.debug en dış debug', text);

  const onHandle = text => {
    console.log('birinci debug', text);
    dispatch(addToName(text));
    console.log('2.debug', text);
  };
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'space-around'}}>
      <View
        style={{
          backgroundColor: 'white',
          borderWidth: 1,
          margin: 10,
          padding: 15,
          borderColor: 'grey',
          borderRadius: 8,
        }}>
        <TextInput
          value={text}
          onChangeText={text => {
            setText(text);
          }}
          placeholder="İsim giriniz.."
        />
      </View>
      <View style={{marginBottom: 20, padding: 10, marginHorizontal: 15}}>
        <Button title="Ekle" onPress={() => onHandle(text)} />
      </View>
    </SafeAreaView>
  );
};
export default Primary;
