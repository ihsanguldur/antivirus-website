

export function userMenuController(state){

    const userMenu = document.getElementById("userMenu");
    const userMenuButton = document.getElementById("userMenuButton");
    if(state){
        userMenuButton.blur();
        userMenuButton.ariaExpanded = "false";
        userMenu.style.display = "none";
    }else{
        userMenuButton.focus();
        userMenuButton.ariaExpanded = "true";
        userMenu.style.display = "block";

    }
}

export function menuController(state){
    const openMenu = document.getElementById("openMenu");
    const closeMenu = document.getElementById("closeMenu");
    const menuButton = document.getElementById("menuButton");
    if(state){
        menuButton.ariaExpanded = "true";
        openMenu.classList.replace("hidden","block");
        closeMenu.classList.replace("block","hidden");
    }else{
        menuButton.ariaExpanded = "false";
        openMenu.classList.replace("block","hidden");
        closeMenu.classList.replace("hidden","block");
    }
}

export function changeNavOnScroll(){
    window.addEventListener("scroll",()=>{
        const navbar = document.getElementsByTagName("nav");
        let navClassList = navbar[0].classList;
        if(window.scrollY > 10){
            navClassList.replace("bg-transparent","bg-orange-500");
            navClassList.add("bg-opacity-60");
        }else{
            navClassList.replace("bg-orange-500","bg-transparent");
        }
    });
}