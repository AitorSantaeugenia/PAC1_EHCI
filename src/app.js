//DOM ELEMENTS TO INTERACT
const trailerVideo = document.getElementById("trailerVideo");
const figCaption = document.getElementById("imageTrailerFigcaption");
const overlayDiv = document.getElementById("overlayDiv");
const imagePoster = document.getElementById("imagePoster");

// FUNCTION TO HOVER AND UNHOVER THE MINDHUNTER LOGO
export function hoverImage(element, elementType){
    if(elementType === 1){
        element.setAttribute('src', '../src/assets/images/mindhunter_logo_white.png');
    }else if(elementType === 2){
        element.setAttribute('src', '../assets/images/mindhunter_logo_white.png');
    }
}

export function unhoverImage (element, elementType){
    if(elementType === 1){
        element.setAttribute('src', './src/assets/images/mindhunter_logo.svg');
    }else if(elementType === 2){
        element.setAttribute('src', './src/assets/images/mindhunter_logo.svg');
    }
}

// FUNCTION TO HIDE THE MINDHUNTER POSTER AND SHOW THE TRAILER
export function changeToVid(element) {
    element.classList.add("hidden");
    imagePoster.classList.add("hidden");
    trailerVideo.classList.remove("hidden");
    figCaption.innerHTML = `Tráiler oficial de Mindhunter. | Video proporcionado por <a href="https://www.youtube.com/watch?v=LR3G1lWbnUU" target="_blank">Netflix</a>`
    trailerVideo.autoplay = "true";
    trailerVideo.load();
}

//FUNCTION TO ADD AN OVERLAY WHEN HOVERING THE IMAGE
export function addOverlay(element, e){
    e.preventDefault();
    overlayDiv.classList.remove("hidden");
}

export function removeOverlay(element) {
    overlayDiv.classList.add("hidden");
}

trailerVideo.addEventListener('ended', function() {
    // show image here
    imagePoster.classList.remove("hidden")
    figCaption.innerHTML = `Póster oficial de Mindhunter, temporada 2. | Imagen de <a href="https://www.rottentomatoes.com/tv/mindhunter/s02" target="_blank">Rotten Tomatoes</a>`
    trailerVideo.classList.add("hidden")
}, false);