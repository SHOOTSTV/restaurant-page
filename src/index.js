import { loadHome } from "./home";

import "./style.css";

loadHome();

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("home-button").addEventListener("click", () => {
    loadHome();
  });
});
