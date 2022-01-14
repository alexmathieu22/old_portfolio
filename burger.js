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
