export default function renderSidebar() {
  const sidebarWrapper = document.querySelector(".sidebar");
  sidebarWrapper.innerHTML = `
    <h1>My Places</h1>
    <h3>Best places I know</h3>
    <div class=input-wrapper>
        <label>Place name</label>
        <input type='text' id='place'></input>
    </div>
    <div class=input-wrapper>
        <label>Review (1-5)</label>
        <input type='number' min='1' max='5' id='review'></input>
    </div>
    <div class=input-wrapper>
        <label>Longitude, latitude</label>
        <input type='text' id='coordinates'></input>
    </div>
    <button class='submit-button'>Add marker</button>
  `;
}
