window.addEventListener("resize", toggleLogo);

let listRemoveWidth = window.matchMedia("(max-width: 735px)");
let listAddWidth = window.matchMedia("(min-width: 735px)");

function toggleLogo(){
    if (listRemoveWidth.matches) {
        document.getElementById("logo-mobile").classList.remove("hidden");
        document.getElementById("logo-desktop").classList.add("hidden");
    }
    else if (listAddWidth.matches) {
        document.getElementById("logo-mobile").classList.add("hidden");
        document.getElementById("logo-desktop").classList.remove("hidden");
    }
}