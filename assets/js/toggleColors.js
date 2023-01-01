
document.getElementById("themeColorButton").addEventListener("click", toggleColors);

const bodyElement = document.getElementsByTagName("HTML")[0];
const moonOrSun = document.getElementById("moonOrSun");
const sunRays = document.getElementById("sunRays");
const moonMask = document.getElementById("moonMask");

checkTheme();

function checkTheme() {
    if (localStorage.getItem("isLight") === 'true'){
        bodyElement.classList.toggle("dark");
        moonMask.classList.toggle("hidden");
        sunRays.classList.toggle("hidden");  
    }
}


function toggleColors(){
    if (localStorage.getItem("isLight") === 'false'){
        bodyElement.classList.toggle("dark");
        moonMask.classList.toggle("hidden");
        sunRays.classList.toggle("hidden");
        localStorage.setItem("isLight", 'true');
    }
    else{
        bodyElement.classList.toggle("dark");
        moonMask.classList.toggle("hidden");
        sunRays.classList.toggle("hidden");
        localStorage.setItem("isLight", 'false');
    }
}
