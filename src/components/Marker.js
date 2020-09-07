import React from 'react';

import './Marker.css';

const Marker = props => (
    <div
        className="marker"
        onClick={event => props.selectStation(props.station)}
    >
        {props.station ? props.station.name : ''}
    </div>
);

export default Marker;