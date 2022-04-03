import * as L from "leaflet";
import "../../../node_modules/leaflet/dist/leaflet";

export function renderMap(coordinates) {
  setMap = L.map("map").setView(coordinates, 8);
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
  ).addTo(setMap);
  return setMap;
}

export function addMarker(map, coordinates, place, review) {
  let marker = L.marker(coordinates).addTo(map);
  marker.bindPopup(`<b>${place}</b><br>${review} stars`).openPopup();
}
