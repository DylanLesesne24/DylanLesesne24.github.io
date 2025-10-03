class Painting {
  constructor(name, artist, image, framed = false) {
    this.name = name;
    this.artist = artist;
    this.image = image;
    this.framed = framed;
  }

  getSection() {
    return `<div class="painting" data-name="${this.name}">
      <img class="thumb" src="${this.image}" alt="${this.name}">
      <h4>${this.name}</h4>
      <div class="artist">by ${this.artist}</div>
    </div>`;
  }

  getModalContent() {
    if (this.framed) {
      return `<div class="framed"><img class="modal-img" src="${this.image}" alt="${this.name}"></div>`;
    } else {
      return `<img class="modal-img" src="${this.image}" alt="${this.name}">`;
    }
  }
}

const paintings = [
  new Painting("Torii Shinto Japanese Tradition", "3D_Maennchen", "images/torii.png", false),
  new Painting("Pumpkin Sunflower Crow Bird", "NoName_13", "images/pumpkin.png", true),
  new Painting("Birds Birdcage Freedom", "mohamed_hassan", "images/birdcage.png", false),
  new Painting("Lighthouse Sunset Landscape", "Anja", "images/lighthouse.png", true)
];

const gallery = document.getElementById("gallery");
gallery.innerHTML = "";
paintings.forEach(p => gallery.insertAdjacentHTML("beforeend", p.getSection()));

function showModalByName(name) {
  const painting = paintings.find(p => p.name === name);
  if (!painting) return;
  document.getElementById("modal-title").innerText = painting.name;
  document.getElementById("modal-artist").innerText = "by " + painting.artist;
  document.getElementById("modal-image").innerHTML = painting.getModalContent();
  document.getElementById("modal").style.display = "block";
}

gallery.addEventListener("click", function(e) {
  let el = e.target;
  while (el && !el.classList.contains("painting")) el = el.parentElement;
  if (!el) return;
  const name = el.getAttribute("data-name");
  showModalByName(name);
});

document.getElementById("modal-close").addEventListener("click", function() {
  document.getElementById("modal").style.display = "none";
});

window.addEventListener("click", function(e) {
  const modal = document.getElementById("modal");
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
