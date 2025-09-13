const sunnyCard = document.getElementById("sunnyCard");
const lyricsDiv = document.getElementById("lyrics");

sunnyCard.addEventListener("click", () => {
    lyricsDiv.innerHTML = `
    <p>Here comes the sun</p>
    <p>Sun</p>
    <p>Sun</p>
    <p>Sun</p>
    <p>Here it comes</p>
  `;
});

const colorPicker = document.getElementById("colorPicker");
const colorDisplay = document.getElementById("colorDisplay");

colorPicker.addEventListener("input", (e) => {
    const color = e.target.value;
    colorDisplay.textContent = `You picked: ${color}`;
    lyricsDiv.style.color = color;
});

const weatherImg = document.getElementById("weatherImg");
const sunnyImg = "images/sunny.png";
weatherImg.addEventListener("click", () => {
    weatherImg.src = sunnyImg;
});
