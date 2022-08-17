import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'


const FavPage = () => {

  const { favList } = useSelector((state) => state.Reducer);
  console.log("fav List", favList);

const renderItem =(item)=>{
    console.log("item",item);
    return(
      <TouchableOpacity >
      <View style={styles.mainContainer}>
        <View style={styles.itemWrapper}>
          <Text style={styles.text}>{item.name}</Text>
          <Text>{item.company.name}</Text>
          <View style={styles.locationWrapper}>
            <Text style={{ color: "#fff", alignSelf: "center" }}>
              {item?.locations[0]?.name ? item?.locations[0]?.name : "boş"}
            </Text>
          </View>

          <Text style={{ alignSelf: "flex-end", color: "#ff8a65" }}>
            {item?.levels[0]?.name}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
    )
}

  return (
    <View>
      <Text>favPage</Text>
     <FlatList data={favList}  renderItem ={renderItem}/>
    </View>
  )
}

export default FavPage

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
});