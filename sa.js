console.log("Portfolio Loaded");

 
emailjs.init({
    publicKey: "n4IbY2Mj3mtPH1dkk" // Replace with your complete Public Key
});
 
document.querySelectorAll(".card").forEach(card => {
     
});
 
// Theme Button (only if it exists)

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

    // Load saved theme
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-theme");
    }

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light-theme");

        if (document.body.classList.contains("light-theme")) {
            localStorage.setItem("theme", "light");
        } else {
            localStorage.setItem("theme", "dark");
        }

    });

}

// Mobile Menu
function toggleMenu() {
    const nav = document.getElementById("navLinks");

    if (nav) {
        nav.classList.toggle("active");
    }
}

// Contact Form
const form = document.getElementById("contact-form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        emailjs.sendForm(
            "service_92mmv9n",
            "template_hdedh8b",
            this
        )
        .then(() => {

            alert("Message sent successfully!");

            form.reset();

        })
        .catch((error) => {

            console.error("EmailJS Error:", error);

            alert("Failed to send message.");

        });

    });

}