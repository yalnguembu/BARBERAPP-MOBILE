import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

// import React from 'react';
// import MapboxGL from '@rnmapbox/maps';

// MapboxGL.setAccessToken('pk.eyJ1Ijoiam92YW5leWFsIiwiYSI6ImNsODh5dzk0NzAxM2wzbnA0MnhjcXVlMTkifQ.3TIbcpHAObP9zxpUeQ97FA');

function Map({ navigation }) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons size={23} name="arrow-back" color="#333333" />
        </TouchableOpacity>
        <Text style={styles.title}>Carte</Text>
      </View>
      <View style={styles.page}>
        <View style={styles.container}>
          {/* <MapboxGL.MapView style={styles.map} styleURL={MapboxGL.StyleURL.Street}>
        <MapboxGL.Camera
          zoomLevel={16}
          followUserLocation
          centerCoordinate={coordinates}
        />
      </MapboxGL.MapView>       */}
        </View>
      </View>
    </View>
  );
}

export default Map;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#fefefe",
    flex: 1,
  },
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fefefe",
  },
  header: {
    width: "100%",
    padding: 15,
    paddingTop: 25,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    marginLeft: 15,
  },
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    height: 300,
    width: 300,
  },
  map: {
    flex: 1,
  },
});
