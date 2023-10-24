// FUNCTION TO HOVER AND UNHOVER THE MINDHUNTER LOGO
function hoverImage(element, elementType) {
    if (elementType === 1) element.setAttribute("src", "./../../../src/assets/images/mindhunter_logo_white.png");
    else if (elementType === 2) element.setAttribute("src", "./../../../assets/images/mindhunter_logo_white.png");
}
function unhoverImage(element, elementType) {
    if (elementType === 1) element.setAttribute("src", "./../../../assets/images/mindhunter_logo_white.png");
    else if (elementType === 2) element.setAttribute("src", "./../../../assets/images/mindhunter_logo.svg");
}

//# sourceMappingURL=wendycarr.3d1d7389.js.map
