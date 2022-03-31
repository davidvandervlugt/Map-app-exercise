export const map = L.map("map").setView([51.505, -0.09], 13);
L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      "pk.eyJ1IjoiZGF2aWR2ZHZsdWd0IiwiYSI6ImNsMWV5OHd3cDAwcm0zY3BmNjAxN2Rid3gifQ.Q31unUZudwzeqVxGEUTtBg",
  }
).addTo(map);

let marker = L.marker([51.5, -0.09]).addTo(map);
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();