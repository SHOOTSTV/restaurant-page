export function loadMenu() {
  const content = document.getElementById("content");
  content.innerHTML = `
    <div class="menu-content">
    <h1>Menu</h1>
    <div class="menu-items">
      <div class="menu-item">
        <h2>Item 1</h2>
        <p>Description of item 1</p>
        <p>$10.00</p>
      </div>
      <div class="menu-item">
        <h2>Item 2</h2>
        <p>Description of item 2</p>
        <p>$12.00</p>
      </div>
      <div class="menu-item">
        <h2>Item 3</h2>
        <p>Description of item 3</p>
        <p>$14.00</p>
      </div>
    </div>
  `;
}
