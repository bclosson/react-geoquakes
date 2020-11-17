import React from 'react';

class QuakesComponent extends React.Component {
    state = {
      features:[{
        type: "Feature",
        properties: {
          mag: 5.8,
          place: "226 km SSW of Padang, Indonesia",
          time: 1605577449575,
          updated:1605578908697,
          tz: null,
          url: "https://earthquake.usgs.gov/earthquakes/eventpage/us7000cfxq",
          detail: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/us7000cfxq.geojson",
          felt: null,
          cdi: null,
          mmi: 3.855,
          alert: "green",
          status: "reviewed",
          tsunami: 0,
          sig: 518,
          net: "us",
          code: "7000cfxq",
          ids: ",us7000cfxq,",
          sources: ",us,",
          types: ",losspager,origin,phase-data,shakemap,",
          nst: null,
          dmin: 3.47,
          rms:0.81,
          gap:42,
          magType: "mww",
          type: "earthquake",
          title: "M 5.8 - 226 km SSW of Padang, Indonesia"
        },
          geometry:{
            type: "Point",
            coordinates: [99.3071,-2.7016,10]
          },
        id: "us7000cfxq"
          },
      ],
    }
  

  render() {
    let eventTime = this.state.features[0].properties.time;
    let currentTime = Date.now();
    let hoursSinceEvent = (currentTime - eventTime) / 3600000;
    console.log(this.state.features[0].properties.title);
    console.log('diff of milliseconds =', currentTime - eventTime);
    console.log("hours since event = ", Math.floor(hoursSinceEvent) );
    return(
      <div>

        <div>
          <h1>Quakes</h1>
        </div>

        <div id="info">
          <p>{this.state.features[0].properties.title}</p>
        </div>

      </div>
    );
  }
}

export default QuakesComponent;
