import "./style.css";
import "./home.css"
import "./shell";
import { NavBar, Home, Menu, About, Footer } from "./shell";
let navItems = document.querySelectorAll(".navItem");
let content = document.querySelector("#content");
let currPage = 1;

navItems.forEach((item) =>{
    item.addEventListener("click", ()=>{
        setPage(item.getAttribute("data-tab"));
    })
});

function setPage(page){
    console.log(page);
    while (content.children[1]) {
        content.removeChild(content.children[1])
    }
    content.appendChild(Footer());
}