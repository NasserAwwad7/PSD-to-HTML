const menu = document.querySelector(".menu-img");
const menuDrop = document.querySelector(".menu-pop");
let cnt = 0;

function changeMenuPhoto() {
    cnt++;
    if (cnt%2 == 0){
        menu.src = "assets/images/menu.svg";
        menuDrop.classList.remove("visible");
    }
    else{
        menu.src = "assets/images/close.svg";
        menuDrop.classList.add("visible");

    }
        
}

menu.addEventListener("click", changeMenuPhoto);