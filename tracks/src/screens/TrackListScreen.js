// import React, { useContext } from "react";
// import { StyleSheet, Text, FlatList, TouchableOpacity } from "react-native";
// import { NavigationEvents } from "@react-navigation/native";
// import { ListItem } from "react-native-elements";
// import { Context as TrackContext } from "../context/TrackContext";

// const TrackListScreen = ({ navigation }) => {
//   const { state, fetchTracks } = useContext(TrackContext);

//   return (
//     <>
//       <NavigationEvents onWillFocus={() => fetchTracks()} />
//       <Text style={{ fontSize: 48 }}>TrackListScreen</Text>
//       <FlatList
//         data={state}
//         keyExtractor={(item) => item._id}
//         renderItem={({ item }) => {
//           return <TouchableOpacity>
//             <ListItem chevron title={item.name} />
//           </TouchableOpacity>
//         }}
//       />
//     </>
//   );
// };

// const styles = StyleSheet.create({});

// export default TrackListScreen;

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
      <Text style={{ fontSize: 48 }}>TrackListScreen</Text>
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

const styles = StyleSheet.create({
  listItemContainer: {
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  listItemTitle: {
    fontSize: 9,
    fontWeight: "bold",
    color: "black",
  },
});

export default TrackListScreen;

