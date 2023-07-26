import { Home, Menu, About } from "./shell";
let navItems = document.querySelectorAll(".navItem");
let content = document.querySelector("#content");

navItems.forEach((item) =>{
    item.addEventListener("click", ()=>{
        let old = document.querySelector(".curr");
        old.classList.remove("curr");
        item.classList.add("curr");
        setPage(item.getAttribute("data-tab"));
    })
});

function setPage(page){
    let tab = document.querySelector("#tab");
    if(tab != null){
        console.log(tab);
        console.log(page);
        tab.parentNode.removeChild(tab);
    }
    if(page == 1){
        content.appendChild(Home());
    }
    else if(page == 2){
        content.appendChild(Menu());
    }
    else if(page == 3){
        content.appendChild(About());
    }
}