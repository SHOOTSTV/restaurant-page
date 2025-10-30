import { loadHome } from "./home";
import { loadMenu } from "./menu";
import "./style.css";

loadHome();

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("home-button").addEventListener("click", () => {
    loadHome();
  });
});

document.getElementById("menu-button").addEventListener("click", () => {
  loadMenu();
});
