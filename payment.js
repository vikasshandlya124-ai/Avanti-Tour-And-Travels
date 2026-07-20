// ================================
// AVANTI TOUR & TRAVELS
// PAYMENT PAGE JAVASCRIPT
// ================================


// Copy UPI ID
function copyUPI() {

    const upi = document.getElementById("upi");

    upi.select();
    upi.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(upi.value);

    alert("✅ UPI ID Copied Successfully!");
}



// Smooth button click animation
const buttons = document.querySelectorAll(
    ".pay-btn, .whatsapp-btn, .home-btn"
);

buttons.forEach(button => {

    button.addEventListener("click", function () {

        this.style.transform = "scale(0.97)";

        setTimeout(() => {

            this.style.transform = "scale(1)";

        }, 150);

    });

});



// QR Image Animation
const qr = document.querySelector(".qr-image");

if (qr) {

    qr.addEventListener("mouseenter", () => {

        qr.style.transform = "scale(1.05)";
        qr.style.transition = "0.3s";

    });

    qr.addEventListener("mouseleave", () => {

        qr.style.transform = "scale(1)";

    });

}



// Fade-in Animation
window.addEventListener("load", () => {

    const container = document.querySelector(".payment-container");

    if (container) {

        container.style.opacity = "0";
        container.style.transform = "translateY(30px)";

        setTimeout(() => {

            container.style.transition = "0.8s ease";

            container.style.opacity = "1";
            container.style.transform = "translateY(0)";

        }, 100);

    }

});