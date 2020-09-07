import React from 'react';

import './Details.css';

const Details = props => {
    return (
        <div className="details">
            <div className="details__modal">
                <div
                    className="details__close"
                    onClick={event => props.selectStation(null)}
                >&#x2715;</div>

                {props.station ? (
                    <table>
                        <tbody>
                            <tr>
                                <td>Name:</td>
                                <td>{props.station.name}</td>
                            </tr>

                            <tr>
                                <td>Address:</td>
                                <td>{props.station.address}</td>
                            </tr>

                            <tr>
                                <td>Capacity:</td>
                                <td>{props.station.capacity}</td>
                            </tr>

                            <tr>
                                <td>Bikes Available:</td>
                                <td>{props.station.status.num_bikes_available}</td>
                            </tr>

                            <tr>
                                <td>Docks Available:</td>
                                <td>{props.station.status.num_docks_available}</td>
                            </tr>

                            <tr>
                                <td>Installed:</td>
                                <td>{props.station.status.is_installed === 1 ? 'Yes' : 'No'}</td>
                            </tr>

                            <tr>
                                <td>Renting:</td>
                                <td>{props.station.status.is_renting === 1 ? 'Yes' : 'No'}</td>
                            </tr>

                            <tr>
                                <td>Returning:</td>
                                <td>{props.station.status.is_returning === 1 ? 'Yes' : 'No'}</td>
                            </tr>
                        </tbody>
                    </table>
                ) : ''}
            </div>
        </div>
    )
};

export default Details;