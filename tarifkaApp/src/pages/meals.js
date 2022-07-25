import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-web";

const Meals = ({ route }) => {
  const { strCategory } = route.params;
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + `${strCategory}`
    );
    setMeals(response.data.meals);
    console.log("------------", meals);
console.log(meals.strMeal)
  };

const reenderItem=({item})=>(
<Text>{item.strMeal}</Text>
);


  //console.log("meals sayfası category yazımı",strCategory);
  return (
    <View style={styles.mainContainer}>
      <FlatList data={meals} renderItem={reenderItem}/>
    </View>
  );
};
export default Meals;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#ff9800",
  },

});
