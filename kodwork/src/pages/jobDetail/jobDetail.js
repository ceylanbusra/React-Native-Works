import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  ActivityIndicator,
  Button,
  Alert,
} from "react-native";
import React from "react";
import useFetch from "../../hooks/useFetch/useFetch";
import RenderHtml from "react-native-render-html";
import { useDispatch } from "react-redux";

const JobDetail = ({ route }) => {
  const dispatch = useDispatch();
  const { id } = route.params;
  const API_URL = `https://www.themuse.com/api/public/jobs/${id}`;

  const { loading, error, data } = useFetch(API_URL);
  //console.log(data.categories,"data.categories");

  const source = {
    html: `${data.contents}`,
  };

  const addFavorite = () => {
    dispatch({ type: "ADD_FAVORITE", payload: data });
  };
  const alertMessage =()=>{
    Alert.alert("Başvrunuz başarıyla gönderilmiştir..");
  }

  /**
 *
     {<Text>{data?.categories[0]?.name? data?.categories[0].name : "null"}</Text>}
 {<Text> locations: {data?.locations[0]?.name ? data?.locations[0].name : "null"}</Text>}
  {<Text> Level: {data?.levels[0]?.name ? data?.levels[0].name : "null"}</Text>}
 */

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.firstContainer}>
        {data?.categories?.map((item) => (
          <Text>{item.name}</Text>
        ))}
        <Text>JOB DETAIL</Text>
      </View>
      <View style={styles.secondContainer}>
        <RenderHtml
          baseStyle={{ marginHorizontal: 10, color: "#000", fontSize: 14 }}
          contentWidth={Dimensions.get("window").width}
          source={source}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <Button title="Submit" onPress={alertMessage} />
        <Button title="Favorite Jobs" onPress={addFavorite} />
      </View>
    </ScrollView>
  );
};

export default JobDetail;

const styles = StyleSheet.create({
  firstContainer: {
    flex: 1,
    backgroundColor: "#e0e0e0",
  },
  secondContainer: {
    flex: 3,
  },
  mainContainer: {
    flex: 1,
  },
  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
