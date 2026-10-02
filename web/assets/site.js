const APK_URL = "https://github.com/sebashuesca/MyFit/releases/download/v1.0.0/MyFit.V1.0.0.apk";

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

document.querySelectorAll("[data-apk-download]").forEach((link) => {
  link.href = APK_URL;
});

const year = document.querySelector("#current-year");
if (year) year.textContent = new Date().getFullYear();
