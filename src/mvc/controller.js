import "./model";
import layout from "./views/layout";
import sidebar from "./views/sidebar";
import { renderMap, addMarker } from "./views/map";
import { mapcoordinates, store } from "./model";

//variables
let controllerMap = null;

//initialization
export function init() {
  layout();
  sidebar();
  controllerMap = renderMap(mapcoordinates);
  renderMapPoints();
  setAddMarkerEventHandler();
}

//controller functions
function renderMapPoints() {
  for (let i in store) {
    addMarker(
      controllerMap,
      store[i].geometry.coordinates,
      store[i].properties.name,
      store[i].properties.review
    );
  }
}

function submitMarker() {
  const coordinates = document.getElementById("coordinates").value.split(", ");
  const place = document.getElementById("place").value;
  const review = document.getElementById("review").value;

  if (coordinates) addMarker(controllerMap, coordinates, place, review);
}

function setAddMarkerEventHandler() {
  const submitButton = document.querySelector(".submit-button");
  submitButton.addEventListener("click", function () {
    submitMarker();
  });
}
