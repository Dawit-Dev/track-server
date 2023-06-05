import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapView from 'react-native-maps'

const Map = () => {
  return (
    <View>
          <MapView style={styles.map} initialRegion={{
              latitude: 37.33233,
              longitude: -122.03121,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01
      }} />
    </View>
  )
}

const styles = StyleSheet.create({
    map: {
        height: 390
    }
})

export default Map
