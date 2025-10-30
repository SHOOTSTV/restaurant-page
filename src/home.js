export function loadHome() {
  const content = document.getElementById("content");
  content.innerHTML = `
    <div class="home-content">
        <div class="home-left">
          <h1>Welcome to our restaurant</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
          <button>Book a table</button>
        </div>
        <div class="home-right">
          <img src="https://placehold.co/600x400" alt="Restaurant" />
        </div>
      </div>
  `;
}
