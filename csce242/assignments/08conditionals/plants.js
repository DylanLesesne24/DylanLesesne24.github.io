const toggleArrow = document.getElementById('toggle-arrow');
const menu = document.getElementById('menu');

toggleArrow.addEventListener('click', () => {
    menu.classList.toggle('show');
    toggleArrow.textContent = menu.classList.contains('show') ? '▲' : '▼';
});

const exercise1Link = document.getElementById('exercise1-link');
const exercise2Link = document.getElementById('exercise2-link');
const plantingSection = document.getElementById('planting-section');
const clockSection = document.getElementById('clock-section');

exercise1Link.addEventListener('click', () => {
    plantingSection.classList.remove('hidden');
    clockSection.classList.add('hidden');
});

exercise2Link.addEventListener('click', () => {
    clockSection.classList.remove('hidden');
    plantingSection.classList.add('hidden');
});

const daysRange = document.getElementById('days-range');
const plantResult = document.getElementById('plant-result');

function updatePlantMessage(days) {
    let message = "";
    if (days <= 2) {
        message = `It's been ${days} days since watering your plant.<br>Your plant is healthy and happy 🌱`;
    } else if (days <= 5) {
        message = `It's been ${days} days since watering your plant.<br>Your plant needs watering 💧`;
    } else if (days <= 9) {
        message = `It's been ${days} days since watering your plant.<br>Leaves are dropping, water soon 🌹`;
    } else {
        message = `It's been ${days} days since watering your plant.<br>Sorry, your plant is no longer with us 🪦`;
    }
    plantResult.innerHTML = message;
}

daysRange.addEventListener('input', () => {
    updatePlantMessage(daysRange.value);
});

updatePlantMessage(daysRange.value);

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    const ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12 || 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("digital-clock").textContent = `${hours}:${minutes} ${ampm}`;
}
setInterval(updateClock, 60000);
updateClock();
