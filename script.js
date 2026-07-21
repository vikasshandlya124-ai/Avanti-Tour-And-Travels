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

function openModal(type){

let title="";
let body="";

if(type=="13"){
title="13 Seater Traveller";

body=`
<ul>
<li>✔ 13 Comfortable Pushback Seats</li>
<li>✔ Air Conditioning</li>
<li>✔ Music System</li>
<li>✔ Charging Point</li>
<li>✔ Bottle Holder</li>
<li>✔ Reading Lights</li>
<li>✔ First Aid Kit</li>
<li>✔ Fire Extinguisher</li>
<li>✔ Professional Driver</li>
<li>✔ Suitable for Family Tours</li>
</ul>
`;
}

if(type=="17"){
title="17 Seater Traveller";

body=`
<ul>
<li>✔ 17 Pushback Seats</li>
<li>✔ Powerful AC</li>
<li>✔ LED TV</li>
<li>✔ Music System</li>
<li>✔ Mobile Charging Point</li>
<li>✔ Large Luggage Space</li>
<li>✔ Reading Lights</li>
<li>✔ Professional Driver</li>
<li>✔ GPS Tracking</li>
<li>✔ Corporate & Family Trips</li>
</ul>
`;
}

if(type=="20"){
title="20 Seater Traveller";

body=`
<ul>
<li>✔ 20 Luxury Pushback Seats</li>
<li>✔ Dual Air Conditioning</li>
<li>✔ LED TV</li>
<li>✔ Premium Music System</li>
<li>✔ USB Charging Ports</li>
<li>✔ Large Luggage Carrier</li>
<li>✔ Microphone</li>
<li>✔ GPS Tracking</li>
<li>✔ First Aid Kit</li>
<li>✔ Fire Extinguisher</li>
<li>✔ Experienced Driver</li>
<li>✔ Corporate Tours</li>
<li>✔ Wedding Tours</li>
<li>✔ School Trips</li>
<li>✔ Outstation Trips</li>
</ul>
`;
}

document.getElementById("modalTitle").innerHTML=title;
document.getElementById("modalBody").innerHTML=body;

document.getElementById("specModal").style.display="block";

}

function closeModal(){
document.getElementById("specModal").style.display="none";
}