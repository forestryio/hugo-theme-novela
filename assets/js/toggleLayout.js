document.getElementById("btnGrid").addEventListener("click", makeGrid);
document.getElementById("btnRows").addEventListener("click", makeRows);
window.addEventListener("resize", adjustListAtMobile);

let listRemoveWidth = window.matchMedia("(max-width: 735px)");
let listAddWidth = window.matchMedia("(min-width: 735px)");
let isList = false;

function adjustListAtMobile(){
    if (listRemoveWidth.matches) {
        document.getElementById("articlesList").classList.remove("articles-list-container-alt");
    }
    else if (listAddWidth.matches && isList === true) {
        document.getElementById("articlesList").classList.add("articles-list-container-alt");
    }
}

function makeGrid(){
    document.getElementById("articlesList").classList.remove("articles-list-container-alt");
    isList = false;
}

function makeRows(){
    document.getElementById("articlesList").classList.add("articles-list-container-alt");
    isList = true;
}