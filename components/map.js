import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

const Marker = ({ text }) =>
  <div>
    <i className="fas fa-map-marker-alt"></i>
  <style jsx>{`
      .fa-map-marker-alt{
        font-size: 25px;
      }
  `}</style>
  </div>;

const API_KEY = 'AIzaSyDPhPY1ypBEvSUZlZo61oamuAwl5B-9IVQ';
export default class Map extends Component {
  static defaultProps = {
    center: { lat: -36.8222, lng: 174.6136 },
    zoom: 11
  }

render() {
    return (
      <div style={{ height: '100vh', width: '100%' }} className='google-map'>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={ this.props.center }
          defaultZoom={ this.props.zoom }
          >
          <Marker
            lat={ -36.8222 }
            lng={ 174.6136 }
            text="My Place"
          />
        </GoogleMapReact>
      </div>
    )
  }
}
