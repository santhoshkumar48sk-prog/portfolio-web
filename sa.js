console.log("Portfolio Loaded");

document.querySelectorAll(".card").forEach(card=>{
    card.addEventListener("click",()=>{
        alert("Project Section Coming Soon");
    });
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