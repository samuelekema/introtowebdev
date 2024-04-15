//navbar change color on scroll
const mynavbar = document.querySelector(".navbar");

window.onscroll = ()=>{
    if(window.scrollY >= 300){
        mynavbar.classList.add("nav-active");
    } else {
        mynavbar.classList.remove("nav-active");
    }
}


//change text color on click
const myButton = document.getElementById("change-button");
myButton.addEventListener("click", ()=>{
    const textColor = document.getElementById("text");
    textColor.classList.toggle("color-change");
})

//dark-light mode
const theme = document.querySelector(".circle2");
theme.addEventListener("click", ()=>{
    theme.classList.toggle("theme");
    const navbar = document.querySelector(".navbar");
    const menuBar = document.querySelector(".menu-bar");
    const circle1 = document.querySelector(".circle1");
    navbar.classList.toggle("switchColorWhite");
    menuBar.classList.toggle("switchColorBlack");
    circle1.classList.toggle("switchColorBlack");
    
    
})


//menu button animate
function menuClick(){
    const menuBar = document.querySelector(".menu-bar");
    menuBar.addEventListener("click", function(){
        const dropdown = document.getElementById("dropdown-menu");
        menuBar.classList.toggle("change");
        dropdown.classList.toggle("visible");
    })

}
menuClick();

