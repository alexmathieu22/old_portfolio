const burger = document.getElementById("burger");
const menu = document.querySelector("ul");

burger.addEventListener("click", () => {
    if (burger.classList.contains("active")) {
        menu.classList.remove("burgerActive");
        burger.classList.remove("active");
    } else {
        menu.classList.add("burgerActive");
        burger.classList.add("active");
    }
});

// MAKE SURE THE MENU CLOSES WHEN YOU CLICK ON AN ELEMENT IN IT
const nav__links = document.querySelectorAll(".nav__link");

nav__links.forEach((nav__link) =>
    nav__link.addEventListener("click", () => {
        if (burger.classList.contains("active")) {
            menu.classList.remove("burgerActive");
            burger.classList.remove("active");
        }
    })
);
