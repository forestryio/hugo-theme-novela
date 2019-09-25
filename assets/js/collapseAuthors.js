let collapsed = true;

document.getElementById("collapsedCoauthors").addEventListener("click", displayCoauthors);
document.getElementById("uncollapsedAction").addEventListener("click", hideCoauthors);

function displayCoauthors(){
    document.getElementById("uncollapsedCoauthors").classList.remove("hidden");
}

function hideCoauthors(){
    document.getElementById("uncollapsedCoauthors").classList.add("hidden");
}