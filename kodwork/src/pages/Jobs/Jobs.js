import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList, Button, Alert } from "react-native";
import useFetch from "../../hooks/useFetch/useFetch";
import Config from "react-native-config";
const API_URL = "https://www.themuse.com/api/public/jobs";
import JobsCard from "../../components/jobsCard/jobsCard";
import { useSelector } from "react-redux";

export default function Jobs({ navigation }) {
  const [page, setPage] = useState(0);

  const { data, error, loading } = useFetch(API_URL + `?page=${page}`);

  const sonrakiSayfa = () => {
    setPage(page + 1);
    console.log("page artırıldı", page);
  };
  const oncekiSayfa = () => {
    setPage(page === 0 ? page : page - 1);
    console.log("page azaltıldı:", page);
  };

  const renderItem = ({ item }) => {
    const id = item.id;
    return (
      <JobsCard
        jobs={item}
        onSelected={() => navigation.navigate("JobDetail", { id })}
      />
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <FlatList data={data.results} renderItem={renderItem} />
      <View style={styles.buttonWrapper}>
        <Button title="Önceki Sayfa" color="#0288d1" onPress={oncekiSayfa} />
        <Button title="Sonraki Sayfa" color="#0288d1" onPress={sonrakiSayfa} />
        {/* <Button title="Fav  Sayfası" color="#0288d1" onPress={navigation.navigate("FavPage")} /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eeeeee",
  },
  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
