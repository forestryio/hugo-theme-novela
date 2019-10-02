document.getElementById("copyButton").addEventListener("click", copyToClipboard);
    
let currentUrl = window.location;
let copyTextContainer = document.getElementById("copyText");
let toolTip = document.getElementById("toolTip");

function copyToClipboard(){
    copyTextContainer.value = currentUrl
    copyTextContainer.focus();
    copyTextContainer.select();
    document.execCommand("copy");

    toolTip.style.animationName = "pan-toolbar";

    setTimeout(function(){
         toolTip.style.removeProperty('animation-name');
    }, 2000);
}