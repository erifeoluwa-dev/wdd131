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
 const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "images/aba-nigeria.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "images/manti-utah.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "images/payson-utah.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "images/yigo-guam.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "images/washington_dc.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "images/lima-peru.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "images/mexico-city.jpg"
  },
  { 
    templeName: "St. George Utah",
    location: "Utah, United States",
    dedicated: "1877, April, 6",
    area: 143969,
    imageUrl:
    "images/st.-george-utah.jpg"
    },
  {
    templeName: "Logan Utah",
    location: "Logan, Utah, United States",
    dedicated: "1884, May, 17",
    area: 119619,
    imageUrl:
  "images/logan-utah.jpg"
  },
  {
    templeName: "Abidjan Ivory Coast",
    location: "Abidjan, Ivory Coast",
    dedicated: "2025, May, 24",
    area: 17362,
    imageUrl:
    "images/abidjan.jpg"
  }
  ];

  function displayTemples(templeArray) {
    const galleryDiv = document.querySelector(".gallery");
    galleryDiv.innerHTML = ""; // clear out whatever was there before
    templeArray.forEach(function(temple) {
      galleryDiv.innerHTML += `
        <figure>
          <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
          <figcaption>
            <p>${temple.templeName}</p>
            <p>${temple.location}</p>
            <p>Dedicated: ${temple.dedicated}</p>
            <p>Area: ${temple.area} sq ft</p>
          </figcaption>
        </figure>
      `;
    });
  }
  displayTemples(temples);
  document.querySelector('[data-filter="old"]').addEventListener("click", function() {
  const oldTemples = temples.filter(function(temple) {
    return parseInt(temple.dedicated) < 1900;
  });
  displayTemples(oldTemples);
});
document.querySelector('[data-filter="new"]').addEventListener("click", function() {
  const newTemples = temples.filter(function(temple) {
    return parseInt(temple.dedicated) > 2000;
  });
  displayTemples(newTemples);
});  
document.querySelector('[data-filter="large"]').addEventListener("click", function() {
  const largeTemples = temples.filter(function(temple) {
    return parseInt(temple.area) > 90000;
  });
  displayTemples(largeTemples);
}); 
document.querySelector('[data-filter="small"]').addEventListener("click", function() {
  const smallTemples = temples.filter(function(temple) {
    return parseInt(temple.area) < 10000;
  });
  displayTemples(smallTemples);
}); 
document.querySelector('[data-filter="all"]').addEventListener("click", function() {
  displayTemples(temples);
});
