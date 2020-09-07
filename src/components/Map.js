import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';

import Details from './Details';
import Marker from './Marker';

const Map = props => {
    const [selectedStation, setSelectedStation] = useState(null)

    const selectStation = station => {
        setSelectedStation(station ? {
            ...station,
            status: props.statuses.filter(
                s => s.station_id === station.station_id
            ).pop()
        } : null);
    }

    return (
        <div style={{ height: '80vh', width: '100%' }}>
            {selectedStation &&
                (<Details
                    station={selectedStation}
                    selectStation={selectStation}
                />)}

            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyAUgqZI6Xg3NpTfwg_I6JJLjoL-8Must4Y' }}
                center={props.center}
                defaultZoom={props.zoom}
            >
                {props.stations ? props.stations.map(station =>
                    (<Marker
                        key={station.station_id}
                        lat={station.lat}
                        lng={station.lon}
                        station={station}
                        selectStation={selectStation}
                    />)) : ''}
            </GoogleMapReact>
        </div >
    )
};

export default Map;
