var hamburgerIcon = document.getElementById("hamburgerIcon");
var hamburgerItems = document.getElementById("hamburgerItems");
hamburgerIcon.addEventListener("click", toggleHamburger);

function toggleHamburger() {
  console.log("you clicked");
  if (hamburgerItems.style.display !== "block") {
    hamburgerItems.style.display = "block";
  } else {
    hamburgerItems.style.display = "none";
  }
}
