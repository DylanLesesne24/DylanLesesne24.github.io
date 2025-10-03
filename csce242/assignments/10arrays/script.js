const cats = {
    "Kira": { after: "images/cat1after.png", caption: "Kira after adoption" },
    "Phoenix": { after: "images/cat2after.png", caption: "Phoenix after adoption" },
    "Midnight": { after: "images/cat3after.png", caption: "Midnight after adoption" },
    "Sunny": { after: "images/cat4after.png", caption: "Sunny after adoption" }
};

const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popup-title");
const popupImage = document.getElementById("popup-image");
const closeBtn = document.getElementById("close");

document.querySelectorAll(".cat-card").forEach(card => {
    card.addEventListener("click", () => {
        const catName = card.dataset.name;
        const cat = cats[catName];

        if (cat) {
            popupTitle.textContent = cat.caption;
            popupImage.src = cat.after;
            popup.classList.remove("hidden");
        }
    });
});

closeBtn.addEventListener("click", () => {
    popup.classList.add("hidden");
});

popup.addEventListener("click", e => {
    if (e.target === popup) {
        popup.classList.add("hidden");
    }
});
