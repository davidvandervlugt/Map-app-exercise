export default function renderSidebar() {
  const sidebarWrapper = document.querySelector(".sidebar");
  sidebarWrapper.innerHTML = `
    <h1>My Places</h1>
    <h3>Best places I know</h3>
    <div class=input-wrapper>
        <label class='place'>Place name</label>
        <input type='text' name='place'></input>
    </div>
    <div class=input-wrapper>
        <label class='stars'>Review (1-5)</label>
        <input type='text' name='stars'></input>
    </div>
    <div class=input-wrapper>
        <label class='coordinates'>Longitude, latitude</label>
        <input type='text' name='coordinates'></input>
    </div>
  `;
}
