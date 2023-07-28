import "./style.css";
import "./home.css"
import "./shell";
import { NavBar, Home, Menu, About, Reservations, Footer } from "./shell";
let navItems = document.querySelectorAll(".navItem");
let content = document.querySelector("#content");
let currPage = 1;

navItems.forEach((item) =>{
    item.addEventListener("click", ()=>{
        setPage(item.getAttribute("data-tab"));
        document.querySelector(".curr").classList.remove("curr");
        item.classList.add("curr");
    })
});

function setPage(page){
    console.log(page);
    while (content.children[1]) {
        content.removeChild(content.children[1])
    }
    if(page == 1){
        content.appendChild(Home().tab);
        content.appendChild(Home().foodMenu);
        content.appendChild(Home().section1);
        content.appendChild(Home().tastingMenu);
    }
    else if(page == 2){
        content.append(Menu());
    }
    else if(page == 3){
        content.append(About());
    }
    else if(page == 4){
        content.append(Reservations());
    }
    content.appendChild(Footer());
}