document.getElementById("drawBtn").addEventListener("click", drawScene);

function drawScene() {
  const scene = document.getElementById("scene");

  [...scene.querySelectorAll(".cloud, .tree, .sun, .moon")].forEach(el => el.remove());

  let hour = new Date().getHours();

  if (hour >= 18 || hour <= 6) {
    scene.style.background = "black";
    let moon = document.createElement("div");
    moon.className = "moon";
    scene.appendChild(moon);
  } else {
    scene.style.background = "skyblue";
    let sun = document.createElement("div");
    sun.className = "sun";
    scene.appendChild(sun);
  }

  for (let i = 0; i < 6; i++) {
    let cloud = document.createElement("div");
    cloud.className = "cloud";
    cloud.style.top = "100px";
    cloud.style.left = (i * 150 + 50) + "px"; 
    scene.appendChild(cloud);
  }

  for (let i = 0; i < 6; i++) {
    let tree = document.createElement("div");
    tree.className = "tree";
    tree.style.left = (i * 150 + 70) + "px"; 
    tree.style.bottom = "20px";

    let leaves = document.createElement("div");
    leaves.className = "leaves";
    let trunk = document.createElement("div");
    trunk.className = "trunk";

    tree.appendChild(leaves);
    tree.appendChild(trunk);
    scene.appendChild(tree);
  }
}
