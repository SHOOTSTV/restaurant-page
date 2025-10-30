export function loadContact() {
  const content = document.getElementById("content");
  content.innerHTML = `
    <div class="contact-content">
      <h1>Contact</h1>
      <div class="contact-form">
      <form>
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <textarea name="message" placeholder="Message"></textarea>
        <button type="submit">Submit</button>
      </form>
      </div>
    </div>
  `;
}
