import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  ActivityIndicator,
  Button,
} from "react-native";
import React from "react";
import useFetch from "../../hooks/useFetch/useFetch";
import RenderHtml from "react-native-render-html";

const JobDetail = ({ route }) => {
  const { id } = route.params;
  const API_URL = `https://www.themuse.com/api/public/jobs/${id}`;

  const { loading, error, data } = useFetch(API_URL);
  console.log(data);

  const source = {
    html: `${data.contents}`,
  };

  //<Text>{data.categories[0].name}</Text>
  //<Text>locations: {data.locations[0].name}</Text>
  //<Text>Job Level: {data.levels[0].name}</Text>

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.firstContainer}>
        <Text>JOB DETAIL</Text>
      </View>
      <View style={styles.secondContainer}>
        <RenderHtml
          baseStyle={{ marginHorizontal: 10, color: "#000", fontSize: 14 }}
          contentWidth={Dimensions.get("window").width}
          source={source}
        />
      </View>
      <View style ={styles.buttonWrapper}>
      <Button title="Submit" />
      <Button title="Favorite Jobs" />
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
