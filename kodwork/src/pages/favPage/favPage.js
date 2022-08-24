import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Alert,
  Button,
} from "react-native";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import JobsCard from "../../components/jobsCard/jobsCard";

const FavPage = ({ navigation }) => {
  const dispatch = useDispatch();
  const { favList } = useSelector((state) => state.Reducer);
  console.log("favlist.length", favList.length);

  const removeJobItems = (id) => {
    // console.log(
    //   "removenin içindeki item değeri nasıl geliyor görmek icun",
    //   id
    // );
    dispatch({ type: "REMOVE_FAVORITE", payload: id });
    // Alert.alert("remova basıldı");
  };

  const renderItem = (item) => {
    console.log("buraya giriyor musun bakalım", item);
    console.log("--------------------------------------");
    console.log("item değeri,", item.item.id);

    return (
      <View>
        <JobsCard jobs={item.item} onSelected={null} />
        <View style={styles.button_container}>
          <TouchableOpacity onPress={removeJobItems(item.item.id)}>
            <Text> Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View>
      {favList.length !== 0 ? (
        <FlatList data={favList} renderItem={renderItem} />
      ) : (
        <Text> FavList is Empty</Text>
      )}
    </View>
  );
};

export default FavPage;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 10,
  },
  text: {
    fontWeight: "bold",
    fontSize: 14,
  },
  locationWrapper: {
    backgroundColor: "#ff8a65",
    width: 150,
    borderRadius: 5,
  },
  itemWrapper: {
    flex: 1,
    margin: 5,
  },
  button_container: {
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
  },
});

//removeJobItems(item.item.id)