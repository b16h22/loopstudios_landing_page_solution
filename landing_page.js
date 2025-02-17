const hamburgerMenu = document.getElementById("hamburger-menu");
const closeMenu = document.getElementById("close-menu");
const sideMenuPane = document.querySelector(".menu-layout");
const sideMenuList = document.querySelector(".menu-list");
const menuLogo = document.querySelector(".logo-menu");

hamburgerMenu.onclick = openSideMenu;
closeMenu.onclick = closeSideMenu;

function changePageLayout(x) {
  if(x.matches) {
    closeMenu.style.display = "none";
    sideMenuList.style.display = "none";
    sideMenuPane.style.width = "0";
    sideMenuPane.style.transition = "width 200ms";
  } else {
    closeMenu.style.display = "none";
    sideMenuList.style.display = "flex";
    menuLogo.style.display = "none";
    sideMenuPane.style.width = "unset";
    sideMenuPane.style.transition = "unset";
  }
}

let x = window.matchMedia("(max-width:48em)");

changePageLayout(x);

x.addEventListener("change", changePageLayout);

function openSideMenu() {
  closeMenu.style.display = "block";
  menuLogo.style.display = "block";
  sideMenuList.style.display = "flex";
  sideMenuPane.style.width = "100%";
  document.body.style.overflow = "hidden";
}

function closeSideMenu() {
  closeMenu.style.display = "none";
  menuLogo.style.display = "none";
  sideMenuList.style.display = "none";
  sideMenuPane.style.width = "0";
  document.body.style.overflow = "unset";
}