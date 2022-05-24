import React, {useState, useEffect} from 'react';
import { StyleSheet, View } from 'react-native';

import Geolocation from '@react-native-community/geolocation';
import MapView from 'react-native-maps';

const App = () => {
  const [latitud, setLatitud] = useState(0);
  const [longitud, setLongitud] = useState(0);

  
  useEffect(() => {
    Geolocation.getCurrentPosition( (e) => {
      setLatitud(e.coords.latitude);
      setLongitud(e.coords.longitude);
    });
  });

  return(
    <View style={styles.container}>
      <MapView 
        style={styles.map} 
        initialRegion={{
          latitude: latitud,
          longitude: longitud,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >
        <MapView.Marker
          coordinate={{ latitude : latitud , longitude : longitud }}
          image={require('./mark.png')}
        />
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    width: '100%',
  },
  map: {
    height: '100%',
    width: '100%',
  }
})

export default App;