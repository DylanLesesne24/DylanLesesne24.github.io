
document.addEventListener("DOMContentLoaded", () => {
  const jsonUrl = "https://YOUR_GITHUB_USERNAME.github.io/REPO_NAME/builds.json";

  const prebuiltSection = document.getElementById("prebuilt");
  if (!prebuiltSection) {
    console.error("Prebuilt section (#prebuilt) not found on page.");
    return;
  }

  fetch(jsonUrl)
    .then(response => {3
      if (!response.ok) throw new Error("Network response not OK: " + response.status);
      return response.json();
    })
    .then(data => {

      let grid = prebuiltSection.querySelector(".pc-grid");
      if (!grid) {
        grid = document.createElement("div");
        grid.className = "pc-grid";
        prebuiltSection.appendChild(grid);
      }

    
      grid.innerHTML = "";

      data.forEach(item => {
        const card = document.createElement("article");
        card.className = "pc-card";

        const img = document.createElement("img");
        img.src = item.img_name;
        img.alt = item.title;
        card.appendChild(img);

        const h3 = document.createElement("h3");
        const a = document.createElement("a");
    
        if (item._id === 1) a.href = "intel-build.html";
        else if (item._id === 2) a.href = "ryzen-build.html";
        else a.href = "#";
        a.textContent = `${item.title} — ${item.price}`;
        h3.appendChild(a);
        card.appendChild(h3);

        const desc = document.createElement("p");
        desc.textContent = item.description;
        card.appendChild(desc);

        const ul = document.createElement("ul");
        ul.className = "spec-list";
        ["cpu", "gpu", "ram", "storage", "motherboard"].forEach(k => {
          if (item[k]) {
            const li = document.createElement("li");
            li.innerHTML = `<strong>${k.toUpperCase()}:</strong> ${item[k]}`;
            ul.appendChild(li);
          }
        });
        card.appendChild(ul);

        grid.appendChild(card);
      });
    })
    .catch(err => {
      console.error("Error loading builds JSON:", err);
      prebuiltSection.innerHTML += "<p class='error'>Sorry — could not load builds list. Check JSON URL and CORS.</p>";
    });
});
