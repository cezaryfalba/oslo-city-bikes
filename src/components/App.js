import React, { useState, useEffect } from 'react';

import { station_information, station_status } from '../services/bikes';

import Map from './Map';

import './App.css';

const App = () => {
    const [stations, setStations] = useState([]);
    const [statuses, setStatuses] = useState([]);
    const [center, setCenter] = useState({});

    const load_data = async () => {
        const stations = (await station_information()).data.stations;
        const statuses = (await station_status()).data.stations;

        setStations(stations);
        setStatuses(statuses);

        // Calculate average lat and lng from the list of stations
        setCenter({
            lat: stations.reduce((a, c, _, { length }) => a + c.lat / length, 0),
            lng: stations.reduce((a, c, _, { length }) => a + c.lon / length, 0)
        })
    }

    useEffect(() => { load_data() }, []);

    return (
        <div className="App">
            <header className="App-header">
                Oslo City Bikes
            </header>

            <main className="App-main">
                <Map
                    center={center}
                    zoom={15}
                    stations={stations}
                    statuses={statuses}
                ></Map>
            </main>

            <footer className="App-footer">
                <small>Copyright Cezary Falba &copy; 2020</small>
            </footer>
        </div >
    );
};

export default App;
