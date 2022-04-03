import layout from "./views/layout";
import sidebar from "./views/sidebar";
import map from "./views/map";

export function init() {
  layout();
  sidebar();
  map();
}

//retrieve geojson from model
//function for adding data to geojson, and then rerending view
