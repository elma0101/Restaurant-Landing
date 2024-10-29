function displayMenu() {
    var menuIcon = document.getElementById("menu");
    var menuBlock = document.querySelector(".container2");

    // Check current icon source to toggle
    if (menuIcon.src.endsWith("/images/icon-hamburger.svg")) {
        menuBlock.style.display = "flex";
        menuIcon.src = "./images/icon-close.svg";
    } else {
        
        menuBlock.style.display = "none";
        menuIcon.src = "./images/icon-hamburger.svg";
    }
}

// Add a single click event listener on load
document.getElementById("menu").addEventListener("click", displayMenu);