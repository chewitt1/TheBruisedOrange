import Banner from "./images/home_banner.jpg";
import Logo from "./images/logo.png";
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
    ul.appendChild(NavItem("Reservations", 4));
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
    let tab = document.createElement("div");
    tab.id = "tab";

    let banner = new Image();
    banner.src = Banner;
    banner.classList.add("background");
    tab.appendChild(banner);

    let textDiv = document.createElement("div");
    textDiv.id = "welcome-txt";

    let homeTag = document.createElement("h1");
    homeTag.innerHTML = "Where jazz meets sustainability";
    textDiv.appendChild(homeTag);
    tab.appendChild(textDiv);

    return tab;
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