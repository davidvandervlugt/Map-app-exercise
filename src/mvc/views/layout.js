const app = document.getElementById("app");

export default function renderLayout() {
  let div = document.createElement("div");
  div.className = "layout";
  div.innerHTML = `
        <div class='sidebar'></div>
        <div id='map'>No map available</div>
    `;
  app.append(div);
}
