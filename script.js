const loader = document.querySelector(".loader");
const playPause = document.querySelector(".ppBtn")
const Mv = document.querySelector(".MV")
const navbar = document.querySelector(".navbar")
const loc = document.querySelector(".place-content")
const map1 = document.querySelector(".map")
const map2 = document.querySelector(".marker-text")
const map3 = document.querySelector(".marker-img")
const hobby1 = document.querySelector(".hobbies-text")
const hobby2 = document.querySelector(".MV")
const hobby3 = document.querySelector(".music-label ")
const hobby4 = document.querySelector(".para")
const hobby5 = document.querySelector(".learning-label")
const hobby6 = document.querySelector(".para1")
const hobby7 = document.querySelector(".codingVideo")
const hobby8 = document.querySelector(".gamingVideo")
const hobby9 = document.querySelector(".gaming-label")
const hobby10 = document.querySelector(".para3")

const topNavigate = document.querySelector(".topNavigate")

playPause.addEventListener("click", function() {
    if (Mv.paused) {
        Mv.play();
        playPause.innerHTML = "Pause";
        }
    else  {
        Mv.pause(); 
        playPause.innerHTML = "Play";
        }
})

setInterval(() => {
    loader.style.opacity = "0%";
}, 7000);
setInterval(()=> {
    loader.style.display = "none"
},8000)
setInterval(()=> {
    document.body.style.overflowY = "scroll"
},8000)

function hobbyA(element, motion, time) {
    if(window.scrollY > time){
        element.classList.add(motion)
    }
    else {
        element.classList.remove(motion)
    }
}

document.addEventListener("scroll", ()=> {
    console.log(window.scrollY);

    // -------NAVBAR ANIMATION------- 

    if(window.scrollY > 180){
        navbar.classList.add("scroll-nav")
    }
    else {
        navbar.classList.remove("scroll-nav")
    }
    
    // -------LOCATION ANIMATION-------

    if(window.scrollY > 200){
        loc.classList.add("right-side")
        map1.classList.add("scale")
        map2.classList.add("left-side")
        map3.classList.add("left-side")
    }
    else {
        loc.classList.remove("right-side")
        map1.classList.remove("scale")
        map2.classList.remove("left-side")
        map3.classList.remove("left-side")
    }



    if(window.scrollY > 800){
        hobby1.classList.add("right-side")
        hobby2.classList.add("left-side")
        hobby3.classList.add("right-side")
        hobby4.classList.add("right-side")
    }
    else {
        hobby1.classList.remove("right-side")
        hobby2.classList.remove("left-side")
        hobby3.classList.remove("right-side")
        hobby4.classList.remove("right-side")
    }

        hobbyA(hobby5, "left-side", 1200)
        hobbyA(hobby6, "left-side", 1200)
        hobbyA(hobby7, "left-side", 1200)


        hobbyA(hobby8, "right-side", 1600)
        hobbyA(hobby9, "left-side", 1600)
        hobbyA(hobby10, "left-side", 1600)


        if(window.scrollY > 640) {
            topNavigate.style.display = "block"
        }
        else {
            topNavigate.style.display = "none"
        }


})


