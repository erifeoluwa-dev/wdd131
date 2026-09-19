// WDD 131 main script
console.log('WDD131 loaded');
let today = new Date();
document.getElementById("currentyear").innerHTML = today.getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;

let temperature = 27;
let windSpeed = 11;
const calculateWindChill = (temp, wind) => 13.12 + 0.6215 * temp - 11.37 * (wind ** 0.16) + 0.3965 * temp * (wind ** 0.16);

if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById("windchill").innerHTML = `${windChill.toFixed(1)}°C`;
} else {
    document.getElementById("windchill").innerHTML = "N/A";
}