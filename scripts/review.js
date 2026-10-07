let count = localStorage.getItem("reviewCount");
if (count === null) {
  count = 0;
} else {
  count = parseInt(count);
}
count = count + 1;
localStorage.setItem("reviewCount", count);
document.getElementById("reviewCount").innerHTML = count;
let today = new Date();
document.getElementById("currentyear").innerHTML = today.getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;