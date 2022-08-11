import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const JobsCard = ({ jobs,onSelected }) => {
  return (
    <TouchableOpacity  onPress={onSelected}>
      <View style={styles.mainContainer}>
        <View style={styles.itemWrapper}>
          <Text style={styles.text}>{jobs.name}</Text>
          <Text>{jobs.company.name}</Text>
          <View style={styles.locationWrapper}>
            <Text style={{ color: "#fff", alignSelf: "center" }}>
              {jobs?.locations[0]?.name ? jobs?.locations[0]?.name : "boş"}
            </Text>
          </View>

          <Text style={{ alignSelf: "flex-end", color: "#ff8a65" }}>
            {jobs?.levels[0]?.name}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default JobsCard;

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
