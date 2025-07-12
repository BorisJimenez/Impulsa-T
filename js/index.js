import hamburgerMenu from "./menu_hamburguesa.js";
import scrollSpy from "./scroll_espia.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  scrollSpy("");
});
