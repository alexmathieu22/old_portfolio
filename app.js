const quoridorcard = document.getElementById("quoridorcard");
const glootdocard = document.getElementById("glootdocard");
const websitecard = document.getElementById("websitecard");

const glootdo_desc_card = document.getElementById("glootdo_desc_card");
const quoridor_desc_card = document.getElementById("quoridor_desc_card");
const website_desc_card = document.getElementById("website_desc_card");

const exit_glootdo = document.getElementById("exit-glootdo");
const exit_quoridor = document.getElementById("exit-quoridor");
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
    for(i; i < len; i++) {
        cards[i].classList.add("hidden"); 
    }
    console.log("test");
}

function addCards() {
    var cards = document.getElementsByClassName("card");
    len = cards !== null ? cards.length : 0;
    i = 0;
    for(i; i < len; i++) {
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

// Show/remove quoridor panel
quoridorcard.addEventListener("click", () => {
    quoridor_desc_card.classList.add("show");
    removeCards();
    removeTitle();
});

exit_quoridor.addEventListener("click", () => {
    quoridor_desc_card.classList.remove("show");
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
