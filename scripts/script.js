/*
    Name: Dylan Garcia
    File name: script.js
    Date: 04/08/2022
*/

//Hamburger menu function.
function hamburger() {
    var menu = document.getElementById("menu-links");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block"
    }
}