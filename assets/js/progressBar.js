window.addEventListener("scroll", updateProgress);
    
progressBar = document.getElementById("progressBar");

scrollProgress = document.getElementById("progressIndicator");

trackLine = document.getElementById("trackLine");

if (document.getElementById("subscriptionSection")){
    articleSubscription = document.getElementById("subscriptionSection").offsetHeight;
}
else{
    articleSubscription = 0;
}

if(document.getElementById("articleNext")){
    articleNext = document.getElementById("articleNext").offsetHeight;
}
else{
    articleNext = 0;
}



footerSection = 150;

bottomOffset = ((articleSubscription + articleNext + footerSection + 350) / document.body.scrollHeight) * 100 ;
bottomOffset += bottomOffset * 1.1;


function updateProgress(){
    let percentScrolled = ((window.pageYOffset / document.body.scrollHeight) * (100 + bottomOffset));

    let transformation = "translateY(" + percentScrolled + "%)";
    scrollProgress.style.webkitTransform = (transformation);


    if (percentScrolled > 100){
        progressBar.style.animationName = "progress-fade-out";
        setTimeout(function(){
            progressBar.style.opacity = "0";
        }, 0); //delay
    }
    else{
        progressBar.style.animationName = "progress-fade-in";
        setTimeout(function(){
            progressBar.style.opacity = "1";
        }, 0); //delay
    }
    if(percentScrolled > 1 ){
        progressBar.style.top = "8%";
        trackLine.style.maxHeight = "88vh";
    }
    if(percentScrolled < 3){
        progressBar.style.top = "23%";
        trackLine.style.maxHeight = "70vh";
    }
}