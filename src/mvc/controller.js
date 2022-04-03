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

  if (coordinates.length === 2 && place.length > 0 && review.length !== null) {
    addMarker(controllerMap, coordinates, place, review);
    clearValues();
  } else window.alert("Fill in all values correctly");
}

function clearValues() {
  document.getElementById("coordinates").value = null;
  document.getElementById("place").value = null;
  document.getElementById("review").value = null;
}

function setAddMarkerEventHandler() {
  const submitButton = document.querySelector(".submit-button");
  submitButton.addEventListener("click", function () {
    submitMarker();
  });
}
