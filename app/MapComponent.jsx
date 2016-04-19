import * as React from 'react';
import { connect } from 'react-redux';
import { API_KEY } from './GoogleMapsCredentials';
import GoogleMap from 'google-map-react';

class MapComponent extends React.Component {

  constructor(props) {
    super(props);
    navigator.geolocation.getCurrentPosition(this.geolocationReceived.bind(this));
  }

  geolocationReceived(position) {
    console.log('Position received: %o', position);
    this.props.dispatch({
      type: 'GEOLOCATION_RECEIVED',
      lat: position.coords.latitude,
      lon: position.coords.longitude,
    });
  }

  render() {
    return (
      <div style={{ height: '500px' }}>
        <GoogleMap
          bootstrapURLKeys={{ key: API_KEY }}
          center={this.props.center}
          zoom={this.props.zoom}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    automobile: state.automobile,
    center: { lat: state.automobile.lat, lng: state.automobile.lon},
    zoom: state.automobile.zoom || 17,
  };
}

export default connect(mapStateToProps)(MapComponent);

MapComponent.propTypes = {
  center: React.PropTypes.any,
  zoom: React.PropTypes.number,
  dispatch: React.PropTypes.func,
};
