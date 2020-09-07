import axios from 'axios';

export const station_information = async () =>
    (await axios.get(`https://gbfs.urbansharing.com/oslobysykkel.no/station_information.json`)).data;

export const station_status = async () =>
    (await axios.get(`https://gbfs.urbansharing.com/oslobysykkel.no/station_status.json`)).data;