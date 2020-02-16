import React from 'react';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';

import MapView, {Marker} from 'react-native-maps'

const { width } = Dimensions.get('window')

class App extends React.Component{
  constructor(props){
    super(props)

    this.state = { 
      region: {
        latitude: -22.8974191,
        longitude: -43.1802163,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421, 
      },

      interestPoints: [
        {
          id: 1,
          coordinate:{
            latitude: -22.8974191,
            longitude: -43.1802163,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }, 
          title:"Point 1",
          description: "desc"
        },
        {
          id: 2,
          coordinate: {
            latitude: -22.9121039,
            longitude: -43.2323445,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421, 
          },
          title:"Point 1",
          description: "desc"
        },
      ]
    }
  }

  async goToSecondPoint(desiredPoint){
    await this.mapView.animateToRegion(desiredPoint);
    console.log(desiredPoint)
  } 

  render(){
    return(
      <View style={styles.container}>
        <View>
          <MapView
            style={styles.map}
            initialRegion={this.state.region}
            ref={map => this.mapView = map}
            >
              {
                this.state.interestPoints.map(point => (
                  <Marker 
                    key={point.id}
                    coordinate={point.coordinate}
                    title={point.title}
                    description={point.description} 
                  />
                ))
              }
          </MapView>
        </View>

              {/* this.state.interestPoints[1].coordinate */}
        <View>
          <Button onPress={() => this.goToSecondPoint(this.state.interestPoints[1].coordinate)} title="Go to second point"
          />
        </View>
      </View>
    );
  }

} 


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width,
    height: 250
  }
});




export default App;
