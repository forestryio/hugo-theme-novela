document.getElementById("themeColorButton").addEventListener("click", toggleColors);

let bodyElement = document.getElementsByTagName("BODY")[0];
let isLight = true;

function toggleColors(){
    if (isLight === true){
        bodyElement.style.setProperty('--primary', "#fff");
        bodyElement.style.setProperty('--secondary', "#fff");
        bodyElement.style.setProperty('--grey', "#73737D");
        bodyElement.style.setProperty('--background-color', "#111216");
        bodyElement.style.setProperty('--accent', "#E9DAAC");
        bodyElement.style.setProperty('--hover', "rgba(255, 255, 255, 0.07)");
        bodyElement.style.setProperty('--gradient', "linear-gradient(180deg, #111216 0%, rgba(66, 81, 98, 0.36) 100%)");
        bodyElement.style.setProperty('--articleText', "#fff");
        bodyElement.style.setProperty('--track', "rgba(255, 255, 255, 0.3)");
        bodyElement.style.setProperty('--progress', "#fff");
        bodyElement.style.setProperty('--card', "#1D2128");
        bodyElement.style.setProperty('--error', "#EE565B");
        bodyElement.style.setProperty('--success', "#46B17B");
        bodyElement.style.setProperty('--errorBackground', "rgba(238, 86, 91, 0.1)");
        bodyElement.style.setProperty('--horizontalRule', "rgba(255, 255, 255, 0.15)");
        bodyElement.style.setProperty('--inputBackground', "rgba(255, 255, 255, 0.07)");

        isLight = false;
    }
    else{
        bodyElement.style.setProperty('--primary', "");
        bodyElement.style.setProperty('--secondary', "");
        bodyElement.style.setProperty('--grey', "");
        bodyElement.style.setProperty('--background-color', "");
        bodyElement.style.setProperty('--accent', "");
        bodyElement.style.setProperty('--hover', "");
        bodyElement.style.setProperty('--gradient', "");
        bodyElement.style.setProperty('--articleText', "");
        bodyElement.style.setProperty('--track', "");
        bodyElement.style.setProperty('--progress', "");
        bodyElement.style.setProperty('--card', "");
        bodyElement.style.setProperty('--error', "");
        bodyElement.style.setProperty('--success', "");
        bodyElement.style.setProperty('--errorBackground', "");
        bodyElement.style.setProperty('--horizontalRule', "");
        bodyElement.style.setProperty('--inputBackground', "");

        isLight = true;
    }
}