const quoridorcard = document.getElementById("quoridorcard");
const glootdocard = document.getElementById("glootdocard");
const websitecard = document.getElementById("websitecard");

const glootdo_desc_card = document.getElementById("glootdo_desc_card");
const quoridor_desc_card = document.getElementById("quoridor_desc_card");
const website_desc_card = document.getElementById("website_desc_card");

const exit_glootdo = document.getElementById("exit-glootdo");
const exit_quoridor = document.getElementById("exit-quoridor");
const exit_website = document.getElementById("exit-website");

glootdocard.addEventListener("click", () => {
    glootdo_desc_card.classList.add("show");
});

quoridorcard.addEventListener("click", () => {
    quoridor_desc_card.classList.add("show");
});

websitecard.addEventListener("click", () => {
    website_desc_card.classList.add("show");
});

exit_glootdo.addEventListener("click", () => {
    glootdo_desc_card.classList.remove("show");
});

exit_quoridor.addEventListener("click", () => {
    quoridor_desc_card.classList.remove("show");
});

exit_website.addEventListener("click", () => {
    website_desc_card.classList.remove("show");
});


