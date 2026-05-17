function setDarkorLight(){
    if(window.matchMedia("(prefers-color-scheme: dark)").matches){
    document.body.classList.add("dark");
     document.body.classList.remove("light");
}
else{
    document.body.classList.add("light");
      document.body.classList.remove("dark");
}
};

if(localStorage.getItem("theme")){
    document.body.classList.add(localStorage.getItem("theme"));
}
else{``
    setDarkorLight();
}

window
.matchMedia("(prefers-color-scheme: dark)")
.addEventListener("change",function(){
if(!localStorage.getItem("theme")){
 setDarkorLight()
    };
});

let btn=document.querySelector("button");
btn.addEventListener("click",function(){
    if(document.body.classList.contains("dark")){
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    localStorage.setItem("theme","light");
}
else{
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    localStorage.setItem("theme","dark");
}
});


// if we optimize the code then  same above code is written in different way as:

const body = document.body;
const btn = document.querySelector("button");
const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

// Apply theme
function applyTheme(theme) {
    body.classList.remove("light", "dark");
    body.classList.add(theme);
}

// Detect system theme
function getSystemTheme() {
    return mediaQuery.matches ? "dark" : "light";
}

// Load saved theme or system theme
const savedTheme = localStorage.getItem("theme");
applyTheme(savedTheme || getSystemTheme());

// Change theme when OS theme changes
mediaQuery.addEventListener("change", () => {
    if (!localStorage.getItem("theme")) {
        applyTheme(getSystemTheme());
    }
});

// Toggle theme
btn.addEventListener("click", () => {
    const newTheme = body.classList.contains("dark") ? "light" : "dark";

    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
});
