const navListWrapper = document.querySelector(".navListWrapper");
const iconListWrapper = document.querySelector(".iconListWrapper");
const menuBtn = document.querySelector(".menu");
let isHide = false;

menuBtn.addEventListener("click", handleMenuClick);

function handleMenuClick(e) {
  isHide = !isHide;
  toggleMenuDisplay();
}
function toggleMenuDisplay() {
  if (isHide) {
    navListWrapper.style.display = "none";
    iconListWrapper.style.display = "none";
  } else {
    navListWrapper.style.display = "flex";
    iconListWrapper.style.display = "flex";
  }
}
