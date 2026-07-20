// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior:"smooth"
        });
    });
});


// ===============================
// Scroll To Top
// ===============================

const topBtn = document.getElementById("topBtn");

window.onscroll = function(){

    if(document.body.scrollTop > 400 || document.documentElement.scrollTop > 400){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

}

function topFunction(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}


// ===============================
// Sticky Navbar Shadow
// ===============================

window.addEventListener("scroll",function(){

    const header=document.querySelector("header");

    header.classList.toggle("sticky",window.scrollY>40);

});


// ===============================
// Button Hover Animation
// ===============================

document.querySelectorAll(".btn-orange").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});


// ===============================
// Welcome Message
// ===============================

console.log("Welcome To Avanti Tour & Travels");