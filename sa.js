console.log("Portfolio Loaded");

document.querySelectorAll(".card").forEach(card=>{
 
 
 
});
const btn = document.getElementById("themeBtn");

if(localStorage.getItem("theme") === "light"){
    document.body.classList.add("light-theme");
}

btn.addEventListener("click", () => {

    document.body.classList.toggle("light-theme");

    if(document.body.classList.contains("light-theme")){
        localStorage.setItem("theme","light");
    }
    else{
        localStorage.setItem("theme","dark");
    }

});
 function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}

 
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});