import React, { useContext } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import MapView, { Polyline } from "react-native-maps";
import { Context as LocationContext } from "../context/LocationContext";

const Map = () => {
  const { state: { currentLocation } } = useContext(LocationContext);
  
  if (!currentLocation) {
    return <ActivityIndicator size='large' style={{ marginTop: 200 }} />
  }

  return (
    <>
      <MapView
        style={styles.map}
        initialRegion={{
          ...currentLocation.coords,
          // latitude: 37.33233,
          // longitude: -122.03121,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        // region={{
        //   ...currentLocation.coords,
        //   latitudeDelta: 0.01,
        //   longitudeDelta: 0.01,
        // }}
      ></MapView>
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 390,
  },
});

export default Map;
