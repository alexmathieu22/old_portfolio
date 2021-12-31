let animeMode = localStorage.getItem("animeMode");

const animeModeToggle = document.querySelector(".animemode-toggle");

function enableAnimeMode() {
    document.body.classList.add("animemode");
    localStorage.setItem("animeMode", "enabled");
}

function disableAnimeMode() {
    document.body.classList.remove("animemode");
    localStorage.setItem("animeMode", null);
}

if (animeMode === "enabled") {
    enableAnimeMode();
}

animeModeToggle.addEventListener("click", () => {
    animeMode = localStorage.getItem("animeMode");

    if (animeMode !== "enabled") {
        enableAnimeMode();
    } else {
        disableAnimeMode();
    }
});
