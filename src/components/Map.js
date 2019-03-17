import React, { Component } from 'react';

const styles= {
    map: {
        height: '70vh',
        padding: 100
      }
}
var script = document.createElement('script');
 script.src = 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp';
document.getElementsByTagName('head')[0].appendChild(script);

class Map extends Component {
componentDidMount(){
    this.loadMap()
}
    loadMap = () => {
        loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyAgHAZHZoMC5NFtz1zTwzi4xfvZOVsaLyE&callback=initMap")
        window.initMap=this.initMap
    }
  
    initMap= () => {
        var map = new window.google.maps.Map(document.getElementById('map'), {
            zoom: 4,
            center: {lat: 47.7, lng: -120.7}
           
        })
          window.eqfeed_callback = function(results) {
            for (var i = 0; i < results.features.length; i++) {
              var coords = results.features[i].geometry.coordinates;
              var latLng = new window.google.maps.LatLng(coords[1],coords[0]);
              var marker = new window.google.maps.Marker({
                position: latLng,
                map: map
            
              });
            }
          }

}

    render() {
      return (
        
            <div id="map" style= {styles.map}></div>
          
    );
   
  }
  

}

/* CODE CREDIT: The function below was used in order to load the google maps api map
without using an external library. I wan to credit Yahya Elharony (https://github.com/elharony) who
posted a tutorial on youTube on how to do this using the function below*/

function loadScript(url) {
    var index  = window.document.getElementsByTagName("script")[0]
    var script = window.document.createElement("script")
    script.src = url
    script.async = true
    script.defer = true
    index.parentNode.insertBefore(script, index)
  }

export default Map;
  
  