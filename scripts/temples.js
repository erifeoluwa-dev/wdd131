// WDD 131 main script
console.log('WDD131 loaded');
let today = new Date();
document.getElementById("currentyear").innerHTML = today.getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;

const hamburger = document.getElementById("hamburger");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", function () {
  console.log("clicked!");
  if (nav.style.display === "flex") {
  nav.style.display = "none";
    } else {
    nav.style.display = "flex";
    }
});

