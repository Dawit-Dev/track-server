import "../_mockLocation";
import React, { useContext, useCallback, useState } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
// import { SafeAreaView, withNavigationFocus } from "@react-navigation/native";
import Map from "../components/Map";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import TrackForm from "../components/TrackForm";
import { useFocusEffect, SafeAreaView } from "@react-navigation/native";

const TrackCreateScreen = ({ navigation }) => {
  const [isFocused, setIsFocused] = useState(true);
  const {
    state: { recording },
    addLocation,
  } = useContext(LocationContext);
  const callback = useCallback(
    (location) => {
      console.log(location)
      addLocation(location, recording);
    },
    [recording]
  );
  const [err] = useLocation(isFocused || recording, callback);

  useFocusEffect(
    useCallback(() => {
      setIsFocused(true);
      return () => {
        setIsFocused(false);
      };
    }, [navigation])
  );

  return (
    <>
      <Text h2>Create a Track</Text>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
      <TrackForm />
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
