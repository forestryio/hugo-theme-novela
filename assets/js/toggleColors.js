document.getElementById("themeColorButton").addEventListener("click", toggleColors);

let bodyElement = document.getElementsByTagName("BODY")[0];
let moonOrSun = document.getElementById("moonOrSun");
let sunRays = document.getElementById("sunRays");
let moonMask = document.getElementById("moonMask");

initAnimation();

function initAnimation(){
    if (localStorage.getItem("isLight") === 'true'){
        moonMask.style.top = "-8px";
        moonMask.style.right = "-5px";
        moonOrSun.style.transform = "scale(1)"
        sunRays.style.transform = "scale(0.1)"
    }
    else{
        moonMask.style.top = "-25px";
        moonMask.style.right = "-15px";
        moonOrSun.style.transform = "scale(0.5)"
        sunRays.style.transform = "scale(0.6)"
    }
}

function toggleColors(){
    if (localStorage.getItem("isLight") === 'true'){
        makeDark();

        moonMask.classList.add("mask-to-sun-animation");
        moonOrSun.classList.add("to-sun-animation");
        sunRays.classList.add("expand-rays");

        setTimeout(function(){
            sunRays.classList.remove("expand-rays");
        }, 500);
        setTimeout(function(){
            moonMask.classList.remove("mask-to-sun-animation");
            moonOrSun.classList.remove("to-sun-animation");
            initAnimation();
        }, 400);

        localStorage.setItem("isLight", 'false');
    }
    else{
        makeLight();

        moonMask.classList.add("mask-to-moon-animation");
        moonOrSun.classList.add("to-moon-animation");
        sunRays.classList.add("contract-rays");


        setTimeout(function(){
            sunRays.classList.remove("contract-rays");
        }, 500);
        setTimeout(function(){
            moonMask.classList.remove("mask-to-moon-animation");
            moonOrSun.classList.remove("to-moon-animation");
            sunRays.classList.remove("contract-rays");
            initAnimation();
        }, 400);

        localStorage.setItem("isLight", 'true');
    }
}

function makeDark(){
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
    bodyElement.style.setProperty('--tooltip', "#000");
}

function makeLight(){
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
    bodyElement.style.setProperty('--tooltip', "lightgrey");
}