const coveocard = document.getElementById("coveocard");
const glootdocard = document.getElementById("glootdocard");
const websitecard = document.getElementById("websitecard");

const glootdo_desc_card = document.getElementById("glootdo_desc_card");
const coveo_desc_card = document.getElementById("coveo_desc_card");
const website_desc_card = document.getElementById("website_desc_card");

const exit_glootdo = document.getElementById("exit-glootdo");
const exit_coveo = document.getElementById("exit-coveo");
const exit_website = document.getElementById("exit-website");

function removeTitle() {
    var title = document.getElementById("projects");
    title.classList.add("hidden");
}

function addTitle() {
    var title = document.getElementById("projects");
    title.classList.remove("hidden");
}

function removeCards() {
    var cards = document.getElementsByClassName("card");
    len = cards !== null ? cards.length : 0;
    i = 0;
    for (i; i < len; i++) {
        cards[i].classList.add("hidden");
    }
    console.log("test");
}

function addCards() {
    var cards = document.getElementsByClassName("card");
    len = cards !== null ? cards.length : 0;
    i = 0;
    for (i; i < len; i++) {
        cards[i].classList.remove("hidden");
    }
}

// Show/remove glootdo panel
glootdocard.addEventListener("click", () => {
    glootdo_desc_card.classList.add("show");
    removeCards();
    removeTitle();
});

exit_glootdo.addEventListener("click", () => {
    glootdo_desc_card.classList.remove("show");
    addCards();
    addTitle();
});

// Show/remove coveo panel
coveocard.addEventListener("click", () => {
    coveo_desc_card.classList.add("show");
    removeCards();
    removeTitle();
});

exit_coveo.addEventListener("click", () => {
    coveo_desc_card.classList.remove("show");
    addCards();
    addTitle();
});

// Show/remove website panel
websitecard.addEventListener("click", () => {
    website_desc_card.classList.add("show");
    removeCards();
    removeTitle();
});

exit_website.addEventListener("click", () => {
    website_desc_card.classList.remove("show");
    addCards();
    addTitle();
});
