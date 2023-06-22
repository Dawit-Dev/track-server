 import React, { useContext, useEffect } from "react";
import { StyleSheet, Text, FlatList, TouchableOpacity } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { ListItem } from "react-native-elements";
import { Context as TrackContext } from "../context/TrackContext";

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext);

  useFocusEffect(
    React.useCallback(() => {
      fetchTracks();
    }, [])
  );

  return (
    <>
      {/* <Text style={{ fontSize: 48 }}>TrackListScreen</Text> */}
      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("TrackDetail", { _id: item._id })
            }
          >
            <ListItem
              containerStyle={styles.listItemContainer}
              titleStyle={styles.listItemTitle}
              chevron
              title={item.name}
            />
          </TouchableOpacity>
        )}
      />
    </>
  );
};

TrackListScreen.navigationOptiions = {
  title: "Tracks"
}

const styles = StyleSheet.create({
  listItemContainer: {
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  listItemTitle: {
    fontSize: 6,
    fontWeight: "bold",
    color: "black",
  },
});

export default TrackListScreen;

