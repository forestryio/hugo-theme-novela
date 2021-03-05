
let be = document.getElementsByTagName("BODY")[0];
let styleVariables = [
    'primary',
    'secondary',
    'grey',
    'background-color',
    'accent',
    'hover',
    'gradient',
    'articleText',
    'track',
    'progress',
    'card',
    'error',
    'success',
    'errorBackground',
    'horizontalRule',
    'inputBackground',
    'tooltip',
];

initColors();

function initColors(){
    if (localStorage.getItem("isLight") === null) {
        localStorage.setItem("isLight", 'true');
    }

    if (localStorage.getItem("isLight") === 'false'){
        makeDark();
    }
    else{
        makeLight();
    }
}


function makeDark(){
    styleVariables.forEach(varName => be.style.setProperty('--' + varName, 'var(--dark-' + varName + ')'));
}

function makeLight(){
    styleVariables.forEach(varName => be.style.setProperty('--' + varName, ''));
}
