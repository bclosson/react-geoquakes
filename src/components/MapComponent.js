import React from 'react';
import ApiModel from '../models/ApiModel';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import earthquake from '../images/earthquake.png';

const mapStyles = {
  padding: '0',
  margin: '0',
  width: '40%',

};

class MapComponent extends React.Component {
  state = {
    features: [],
  }

  componentDidMount() {
    this.fetchData();
  };

  fetchData = () => {
    ApiModel.all().then((res) => {
      this.setState({
        features: res.data.features,
      });
    });
  };

  render() {
    const positionData = this.state.features.map((position) => {
      const lat = position.geometry.coordinates[1];
      const lng = position.geometry.coordinates[0];   
      return <Marker
      position={ {lng:lng, lat:lat} }
      icon={{ url:earthquake,
      anchor: new this.props.google.maps.Point(0, 0),
      scaledSize: new this.props.google.maps.Size(37, 37) 
      }}
    />
    });

    return(
      <div>
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            lat: 47.606209,
            lng: -122.332069
          }}
        >
        { positionData }
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg'
})(MapComponent);