import axios from 'axios';

const endPoint = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson';


class ApiModel {
  static all = () => {
    let request = axios.get(endPoint);
    return request;
  };
};

export default ApiModel;