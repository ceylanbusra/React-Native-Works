import React from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {removeToName} from '../context/Actions';

const Secondary = (props, item) => {
  const dispatch = useDispatch();
  const List = useSelector(s => s.nameList);
  console.log({List});
  const renderItem = item => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#40A4E8',
          margin: 10,
          padding: 14,
          borderRadius: 8,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{color: '#f0f0f0', fontSize: 24, fontWeight: '500'}}>
          {item.name}
        </Text>
        <TouchableOpacity onPress={() => dispatch(removeToName(item.id))}>
          <Text style={{color: 'red', fontSize: 24}}>Sil</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <FlatList
        data={List}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => renderItem(item)}
      />
    </View>
  );
};
export default Secondary;
