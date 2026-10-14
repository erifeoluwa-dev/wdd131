const today = new Date();
document.querySelector("#currentyear").textContent = today.getFullYear();
document.querySelector("#lastModified").textContent = `Last modified: ${document.lastModified}`;

const cars = [
    {
        make: "Toyota",
        model: "Camry",
        year: 2016,
        trim: "SE",
        mileage: 78500,
        history: "No known accidents",
        info: "Clean interior, cold air conditioning, and a smooth automatic gearbox.",
        images: ["toyota-camry-2016.jpg"]
    },
    {
        make: "Lexus",
        model: "RX 350",
        year: 2014,
        trim: "Premium",
        mileage: 112000,
        history: "Minor rear impact, professionally repaired",
        info: "Spacious SUV with leather seats and a quiet, comfortable ride.",
        images: ["lexus-rx-350-2014.webp"]
    },
    {
        make: "Mercedes-Benz",
        model: "GLE 350",
        year: 2019,
        trim: "4MATIC",
        mileage: 54200,
        history: "No known accidents",
        info: "Low mileage with a panoramic roof and a full service record.",
        images: ["mercedes-gle-350-2019.webp"]
    },
    {
        make: "Honda",
        model: "Accord",
        year: 2018,
        trim: "EX-L",
        mileage: 69800,
        history: "No known accidents",
        info: "Fuel-efficient sedan with leather seats and a reversing camera.",
        images: ["honda-accord-2018.webp"]
    },
    {
        make: "Toyota",
        model: "Highlander",
        year: 2012,
        trim: "Limited",
        mileage: 134000,
        history: "Minor front impact, repaired",
        info: "Seven-seater family SUV with a strong engine and plenty of space.",
        images: ["toyota-highlander-2012.webp"]
    }
];

const filters = {
    all: () => true,
    newer: car => car.year >= 2018,
    lowmileage: car => car.mileage < 80000,
    noaccident: car => car.history === "No known accidents"
};

function createCard(car) {
    return `
        <article class="car-card">
            <img src="images/${car.images[0]}" alt="${car.year} ${car.make} ${car.model} ${car.trim}" width="400" height="250" loading="lazy">
            <div class="car-details">
                <h3>${car.year} ${car.make} ${car.model}</h3>
                <p>Trim: ${car.trim} | Mileage: ${car.mileage.toLocaleString()} km</p>
                <p><strong>History:</strong> ${car.history}</p>
                <p>${car.info}</p>
            </div>
        </article>`;
}

function displayCars(list) {
    const carList = document.querySelector("#car-list");
    const count = document.querySelector("#result-count");

    carList.innerHTML = list.map(createCard).join("");

    if (list.length === 0) {
        count.textContent = "No cars match this filter yet.";
    } else {
        count.textContent = `Showing ${list.length} of ${cars.length} cars.`;
    }
}

function applyFilter(name) {
    const selected = filters[name] ? name : "all";

    displayCars(cars.filter(filters[selected]));

    document.querySelectorAll(".filter-buttons button").forEach(button => {
        button.setAttribute("aria-pressed", button.dataset.filter === selected);
    });

    localStorage.setItem("dm4autos-filter", selected);
}

if (document.querySelector("#car-list")) {
    document.querySelectorAll(".filter-buttons button").forEach(button => {
        button.addEventListener("click", () => applyFilter(button.dataset.filter));
    });

    applyFilter(localStorage.getItem("dm4autos-filter") || "all");
}

const WHATSAPP_NUMBER = "2348064540495";

function buildWhatsAppLink(details) {
    const message = `Hello DM4Autos, my name is ${details.fullname}. I am contacting you about: ${details.topic}. ${details.message} You can reach me on ${details.phone}.`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function handleContactSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const feedback = document.querySelector("#form-feedback");
    const details = Object.fromEntries(new FormData(form));
    const digits = details.phone.replace(/\D/g, "");

    if (digits.length < 10) {
        feedback.textContent = "Please enter a valid phone number with at least 10 digits.";
        return;
    }

    feedback.textContent = `Thank you, ${details.fullname}. Opening WhatsApp so you can send your message.`;
    window.open(buildWhatsAppLink(details), "_blank", "noopener");
    form.reset();
}

const contactForm = document.querySelector("#contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", handleContactSubmit);
}