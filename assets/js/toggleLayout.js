document.getElementById("btnGrid").addEventListener("click", makeGrid);
document.getElementById("btnRows").addEventListener("click", makeRows);

function makeGrid(){
    document.getElementById("articlesList").classList.remove("articles-list-container-alt");
}

function makeRows(){
    document.getElementById("articlesList").classList.add("articles-list-container-alt");
}