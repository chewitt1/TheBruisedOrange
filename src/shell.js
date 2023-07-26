export function NavBar(){
    let navBar = document.createElement("header");
    let title = document.createElement("h1"); title.innerHTML = "<i>Bruised</i>";
    navBar.appendChild(title);
    navBar.appendChild(document.createElement("hr"));
    let nav = document.createElement("nav"); 
    let ul = document.createElement("ul");
    ul.appendChild(NavItem("Home", 1));
    ul.appendChild(NavItem("Menu", 2));
    ul.appendChild(NavItem("About", 3));
    nav.appendChild(ul);
    navBar.appendChild(nav);
    navBar.appendChild(document.createElement("hr"))
    //navBar.innerHTML =  "<hr><nav><ul><li class=\"navItem curr\">Home</li><li class=\"navItem\">Menu</li><li class=\"navItem\">About</li></ul></nav><hr>";
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

    let homeTitle = document.createElement("h1");
    homeTitle.innerHTML = "The Bruised Orange Jazz Bar";
    tab.appendChild(homeTitle);

    let homeTag = document.createElement("h3");
    homeTag.innerHTML = "Where jazz meets sustainability";
    tab.appendChild(homeTag);

    let homeImg1 = document.createElement("img");
    homeImg1.src = "../src/images/image.jpg";
    homeImg1.style.height = "400px";
    tab.appendChild(homeImg1);
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