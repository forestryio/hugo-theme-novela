let collapsed = true;

function displayCoauthors(){
    document.getElementById("uncollapsedCoauthors").classList.remove("hidden");
}

function hideCoauthors(){
    document.getElementById("uncollapsedCoauthors").classList.add("hidden");
}

function bindCollapseAuthors() {
    const collapsedCoauthorsElement = document.getElementById("collapsedCoauthors");

    if (collapsedCoauthorsElement === null) {
        return;
    }

    collapsedCoauthorsElement.addEventListener("click", displayCoauthors);
    document.getElementById("uncollapsedAction").addEventListener("click", hideCoauthors);
}

bindCollapseAuthors();
