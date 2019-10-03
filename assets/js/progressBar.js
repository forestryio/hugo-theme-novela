window.addEventListener("scroll", updateProgress);
    
progressBar = document.getElementById("progressBar");

scrollProgress = document.getElementById("progressIndicator");

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

bottomOffset = articleSubscription + articleNext;


function updateProgress(){
    let percentScrolled = (window.pageYOffset / (document.body.scrollHeight - (bottomOffset * 3.5))) * 100;

    let transformation = "translateY(" + percentScrolled + "%)";
    scrollProgress.style.webkitTransform = (transformation);
    console.log(percentScrolled);

    if (percentScrolled > 100){
        progressBar.style.animationName = "progress-fade-out";
        setTimeout(function(){
            progressBar.style.opacity = "0";
        }, 900);
    }
    else{
        progressBar.style.animationName = "progress-fade-in";
        setTimeout(function(){
            progressBar.style.opacity = "1";
        }, 900);
    }
}