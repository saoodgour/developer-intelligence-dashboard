
let developers = [];

const developerList = document.getElementById("developerList");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const emptyMessage = document.getElementById("emptyMessage");

fetch("http://localhost:8080/api/developers")
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to load developers");
        }
        return response.json();
    })
    
.then(data => {
    developers = data;

    document.getElementById("totalDevelopers").textContent =
        developers.length;

    const average = developers.reduce(
        (sum, developer) => sum + developer.score, 0
    ) / developers.length;

    document.getElementById("averageScore").textContent =
        average.toFixed(1);

    const topDeveloper = [...developers].sort(
        (a, b) => b.score - a.score
    )[0];

    document.getElementById("topCandidate").textContent =
        topDeveloper.name;

    renderDevelopers(searchInput.value);

    console.log("Developers loaded:", developers);
})

    .catch(error => {
        console.error("API error:", error);
    });


function renderDevelopers(searchText = "") {
    const query = searchText.toLowerCase();

    
const filtered = developers.filter(developer =>
    developer.name.toLowerCase().includes(query) ||
    developer.username.toLowerCase().includes(query) ||
    developer.skills.some(skill =>
        skill.toLowerCase().includes(query)
    )
);

if (sortSelect.value === "highToLow") {
    filtered.sort((a, b) => b.score - a.score);
} else if (sortSelect.value === "lowToHigh") {
    filtered.sort((a, b) => a.score - b.score);
}


    developerList.innerHTML = filtered.map(developer => `
        <article class="developer-card">
            <h3>${developer.name}</h3>
            <p class="username">@${developer.username}</p>
           
<div class="score">${developer.score}%</div>
<div class="score-bar">
    <div class="score-fill" style="width: ${developer.score}%"></div>
</div>

            <div>
                ${developer.skills.map(skill =>
                    `<span class="skill">${skill}</span>`
                ).join("")}
            </div>
            <p class="role">${developer.role}</p>
        </article>
    `).join("");

    emptyMessage.hidden = filtered.length !== 0;
}

searchInput.addEventListener("input", event => {
    renderDevelopers(event.target.value);
});
sortSelect.addEventListener("change", () => {
    renderDevelopers(searchInput.value);
});

renderDevelopers();
