import React from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY = 'AIzaSyDCyCaWZhq2MvVXkgmwe5jtdKsVKJMoahE';

const RouteMap = props => {
  const origin = {
    latitude: 44.444629,
    longitude: 26.150406,
  };

  const destination = {
    latitude: 44.432662,
    longitude: 26.096306,
  };

  return (
    <MapView
      style={{width: '100%', height: '100%'}}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: 44.439662,
        longitude: 26.096306,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}>
      <MapViewDirections
        origin={origin}
        destination={destination}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={5}
        strokeColor="black"
      />
      <Marker coordinate={origin} title={'Origin'} />
      <Marker coordinate={destination} title={'Destination'} />
    </MapView>
  );
};

export default RouteMap;
