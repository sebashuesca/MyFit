/* Añade aquí la ruta o URL pública del APK cuando esté disponible. */
const APK_URL = "";

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".primary-nav");

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Abrir menú" : "Cerrar menú");
  navigation.classList.toggle("is-open", !isOpen);
});

navigation?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("is-open");
    menuButton?.setAttribute("aria-expanded", "false");
    menuButton?.setAttribute("aria-label", "Abrir menú");
  });
});

const toast = document.querySelector("#download-toast");
const availability = document.querySelector("#apk-availability");
let toastTimer;

document.querySelectorAll("[data-apk-download]").forEach((link) => {
  if (APK_URL.trim()) {
    link.href = APK_URL;
    if (!/^https?:\/\//i.test(APK_URL)) link.setAttribute("download", "");
  } else {
    link.setAttribute("aria-disabled", "true");
    link.addEventListener("click", (event) => {
      event.preventDefault();
      toast.hidden = false;
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => { toast.hidden = true; }, 5000);
    });
  }
});

if (APK_URL.trim() && availability) {
  availability.innerHTML = '<svg class="icon" aria-hidden="true"><use href="#icon-info"></use></svg> Beta v3.0 disponible para descarga directa.';
}

const year = document.querySelector("#current-year");
if (year) year.textContent = new Date().getFullYear();
