import React, { useState } from 'react';
import {Map, InfoWindow, Marker,GoogleApiWrapper} from 'google-maps-react';
import Location from '../Location/Location';


export class MapContainer extends React.Component {
    

render() {
    return (
    <div >
      <Map google={this.props.google} zoom={14} style={{position:'relative', maxWidth:'400px', height:'400px'}}
      initialCenter={{
        lat: this.props.newLat,
        lng: this.props.newLong
      }}
      onClick={this.onMapClicked}>
        
        <Marker name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>hello</h1>
            </div>
        </InfoWindow>
      </Map>
      {/* <Location /> */}
    </div>
    );
  }
}

 
export default GoogleApiWrapper({
  apiKey: 'AIzaSyDneTtLt5irtPZ8g6tGT4x_Lvhr2brofU8'
})(MapContainer)

