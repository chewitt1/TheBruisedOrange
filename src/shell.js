import Banner from "./images/home_banner.jpg";
import Logo from "./images/logo.png";
import Food from "./images/food.jpg";
import Drinks from "./images/drinks.jpg";

export function NavBar(){
    let navBar = document.createElement("header");
    let titleBox = document.createElement("div");
    titleBox.id = "titleBox";
    let title = document.createElement("h1"); title.innerHTML = "<i>Bruised</i>";
    titleBox.appendChild(title);
    let logoImg = new Image();
    logoImg.src = Logo;
    logoImg.id = "logo";
    titleBox.appendChild(logoImg);
    navBar.appendChild(titleBox);

    let nav = document.createElement("nav"); 
    let ul = document.createElement("ul");
    ul.appendChild(NavItem("Home", 1));
    ul.appendChild(NavItem("Menu", 2));
    ul.appendChild(NavItem("About", 3));
    ul.appendChild(NavItem("Reservations", 3));
    nav.appendChild(ul);
    navBar.appendChild(nav);
    return navBar;
}

function NavItem(txt, val){
    let item = document.createElement("li");
    item.classList.add("navItem");
    if(val == 1){item.classList.add("curr");}
    item.innerHTML = txt;
    item.setAttribute("data-tab" , val);
    return item;
}

export function Home(){
    //Tab
    let tab = document.createElement("div");
    tab.id = "tab";

    let banner = new Image();
    banner.src = Banner;
    banner.classList.add("background");
    tab.appendChild(banner);

    let textDiv = document.createElement("div");
    textDiv.id = "welcome-txt";

    let homeTag = document.createElement("h1");
    homeTag.innerHTML = "Where jazz meets <br>sustainability";
    textDiv.appendChild(homeTag);
    tab.appendChild(textDiv);

    //Food Menu Section
    let foodMenu = document.createElement("div");
    foodMenu.id = "foodMenu";

    let foodSection = document.createElement("div");
    foodSection.classList.add("colorOverlay");

    let foodImg = new Image(); foodImg.src = Food; 
    foodImg.style.height = "300px";
    foodSection.appendChild(foodImg);

    let foodTxt = document.createElement("div");
    foodTxt.id = "foodMenuTxt";

    let foodTxtTitle = document.createElement("h2");
    foodTxtTitle.innerHTML = "FOOD MENU"
    foodTxt.appendChild(foodTxtTitle);

    let foodTxtP = document.createElement("p");
    foodTxtP.innerHTML = "Experience ingredient-first dining"
    foodTxt.appendChild(foodTxtP);

    let foodTxtBtn = document.createElement("button");
    foodTxtBtn.innerHTML = "View Menu";
    foodTxt.appendChild(foodTxtBtn);

    foodSection.appendChild(foodTxt);
    foodMenu.appendChild(foodSection);

     //Tasting Menu Section
     let tastingMenu = document.createElement("div");
     tastingMenu.id = "tastingMenu";
 
     let tastingSection = document.createElement("div");
     tastingSection.classList.add("colorOverlay2");
 
     let tastingTxt = document.createElement("div");
     tastingTxt.id = "tastingMenuTxt";
 
     let tastingTxtTitle = document.createElement("h2");
     tastingTxtTitle.innerHTML = "TASTING MENU"
     tastingTxt.appendChild(tastingTxtTitle);
 
     let tastingTxtP = document.createElement("p");
     tastingTxtP.innerHTML = "Taste our unique liquer combinations"
     tastingTxt.appendChild(tastingTxtP);
 
     let tastingTxtBtn = document.createElement("button");
     tastingTxtBtn.innerHTML = "View Menu";
     tastingTxt.appendChild(tastingTxtBtn);
     tastingSection.appendChild(tastingTxt);

     let tastingImg = new Image(); tastingImg.src = Drinks; 
     tastingImg.id = "tastingImg"
     tastingSection.appendChild(tastingImg);
 

     tastingMenu.appendChild(tastingSection);

    return {tab, foodMenu, tastingMenu};
}

export function Menu(){
    let tab = document.createElement("div");
    tab.id = "tab";

    let homeTitle = document.createElement("h1");
    homeTitle.innerHTML = "Menu";
    tab.appendChild(homeTitle);

    let homeTag = document.createElement("h3");
    homeTag.innerHTML = "Item Name";
    tab.appendChild(homeTag);
    return tab;
}

export function About(){
    let tab = document.createElement("div");
    tab.id = "tab";

    let homeTitle = document.createElement("h1");
    homeTitle.innerHTML = "About";
    tab.appendChild(homeTitle);

    let homeTag = document.createElement("h3");
    homeTag.innerHTML = "The Bruised Orange Jazz Bar";
    tab.appendChild(homeTag);
    return tab;
}

export function Footer(){
    let footer = document.createElement("footer");
    footer.innerHTML = "The Bruised Orange - A Odin Restaurant - Created By Carrima Hewiit - Copyright 2023";
    return footer;
}

//Initial Page Load setup
let content = document.querySelector("#content");
content.appendChild(NavBar());
content.appendChild(Home().tab);
content.appendChild(Home().foodMenu);
content.appendChild(Home().tastingMenu);
content.appendChild(Footer());