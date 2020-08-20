const panels = document.querySelectorAll(".panel")
let OpenPanel = false;

function toggleOpen(){
    this.classList.toggle("open");
    OpenPanel = true;    
}

function toggleActive(e){
    if (e.propertyName.includes("flex") && OpenPanel){
        console.log("open")
        this.classList.toggle("open-active");
    }
}
panels.forEach(panel => panel.addEventListener("click", toggleOpen));
panels.forEach(panel => panel.addEventListener("transitionend", toggleActive));
