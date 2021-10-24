import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const App = () => {
  //default list
  let initToDoList = [
    {title: 'Ders calis', complate: true},
    {title: 'Video izle', complate: false},
    {title: '2.5 litre su iç', complate: true},
  ];
  const [todoList, settodoList] = useState(initToDoList);
  const [todoTitle, settodoTitle] = useState('');
  //To do liste veri ekleme fonksiyonu
  const addToDo = () => {
    let data = {title: todoTitle, complate: false};
    let newList = todoList;
    newList.push(data);
    settodoList(newList);

    settodoTitle('');
  };
  //To do listte yapılanları güncelleyen fonksiyon
  const updateToDo = (todo, index) => {
    let newList = [];
    let i, item;
    todoList.forEach((item, i) => {
      i == index
        ? newList.push({title: item.title, complate: !item.complate})
        : newList.push(item);
    });
    settodoList(newList);
    settodoTitle('');
  };
  //to do listten gereksiz to do ları silen fonksiyon
  const deleteToDo = (todo, index) => {
    let newList = [];
    todoList.forEach((item, index1) => {
      index == index1 ? newList.pop(item) : newList.push(item);
    });
    settodoList(newList);
    settodoTitle('');
  };
  return (
    <SafeAreaView style={{flex: 1, paddingTop: 20}}>
      <View style={styles.mainContainer}>
        <TextInput
          style={styles.textInput}
          value={todoTitle}
          onChangeText={value => settodoTitle(value)}
          style={styles.textInput}></TextInput>

        <View style={styles.secondContainer}>
          <Text style={{fontSize: 20, fontWeight: 'bold', paddingTop: 5}}>
            TO DO LIST
          </Text>
          <ScrollView style={{flex: 1, width: '100%'}}>
            {todoList.map((todo, index) => (
              <TouchableOpacity
                onPress={() => updateToDo(todo, index)}
                onLongPress={() => deleteToDo(todo, index)}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 10,
                  width: '100%',
                  height: 50,
                  borderWidth: 1,
                  borderColor: todo.complate ? '#4CAF50' : '#C81B1B',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginVertical: 10,
                  borderRadius: 5,
                }}
                key={index.toString()}>
                <Text>{todo.title}</Text>
                <FontAwesome5
                  name={todo.complate ? 'check-square' : 'square'}
                  size={25}
                  color={todo.complate ? '#4CAF50' : '#C81B1B'}></FontAwesome5>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
      <TouchableOpacity onPress={() => addToDo()} style={styles.addButton}>
        <Text style={{color: 'white', fontSize: 30}}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    padding: 10,
    alignItems: 'center',
  },
  textInput: {
    width: '100%',
    height: '10%',
    borderColor: 'black',
    borderWidth: 1,
    paddingBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  secondContainer: {
    flex: 3,
    paddingVertical: 30,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  addButton: {
    width: '15%',
    height: '9%',
    backgroundColor: 'blue',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 30,
    bottom: 30,
  },
});

export default App;
