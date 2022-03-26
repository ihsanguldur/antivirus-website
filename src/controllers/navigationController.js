export function userMenuController(state) {

    const userMenu = document.getElementById("userMenu");
    const userMenuButton = document.getElementById("userMenuButton");
    if (state) {
        userMenuButton.blur();
        userMenuButton.ariaExpanded = "false";
        userMenu.style.display = "none";
    } else {
        userMenuButton.focus();
        userMenuButton.ariaExpanded = "true";
        userMenu.style.display = "block";

    }
}

export function menuController(state) {
    const openMenu = document.getElementById("openMenu");
    const closeMenu = document.getElementById("closeMenu");
    const menuButton = document.getElementById("menuButton");
    if (state) {
        menuButton.ariaExpanded = "true";
        openMenu.classList.replace("hidden", "block");
        closeMenu.classList.replace("block", "hidden");
    } else {
        menuButton.ariaExpanded = "false";
        openMenu.classList.replace("block", "hidden");
        closeMenu.classList.replace("hidden", "block");
    }
}

function scrollEvent() {
    const navbar = document.getElementsByTagName("nav");
    let navClassList = navbar[0].classList;
    if (window.scrollY > 10) {
        navClassList.replace("bg-transparent", "bg-orange-500");
    } else {
        navClassList.replace("bg-orange-500", "bg-transparent");
    }
}

export function changeNavOnScroll() {
    window.addEventListener("scroll", scrollEvent);
}

export function clearScrollAnimation() {
    window.removeEventListener("scroll", scrollEvent)
}