import Banner from "./images/home_banner.jpg";
import Logo from "./images/logo.png";
import Food from "./images/food.jpg";
import Drinks from "./images/drinks.jpg";
import BigLogo from "./images/logo_big.png";
import Jazz from "./images/jazz.jpg";
import Drink from "./images/drink.jpg";
import Meal from "./images/meal.jpg"

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
    //Tab
    let tab = document.createElement("div");
    
    tab.classList.add("home");

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

    //Section 1
    let section1 = document.createElement("section");
    section1.id = "homeSection";
    let sectionTop = document.createElement("div");
    let logoImg = new Image();
    logoImg.src = BigLogo;
    sectionTop.appendChild(logoImg);

    let traits = document.createElement("div");
    traits.id = "traits";

    let trait1 = document.createElement("div");
    trait1.classList.add("trait");
    let traitTxt1 = document.createElement("h2"); traitTxt1.innerHTML = "JAZZ";
    let traitImg1 = new Image(); traitImg1.src = Jazz;
    trait1.appendChild(traitTxt1); trait1.appendChild(traitImg1);
    traits.appendChild(trait1);

    let trait2 = document.createElement("div");
    trait2.classList.add("trait");
    let traitTxt2 = document.createElement("h2"); traitTxt2.innerHTML = "FOOD";
    let traitImg2 = new Image(); traitImg2.src = Meal;
    traitImg2.id = "foodImg";
    trait2.appendChild(traitTxt2); trait2.appendChild(traitImg2);
    traits.appendChild(trait2);

    let trait3 = document.createElement("div");
    trait3.classList.add("trait");
    let traitTxt3 = document.createElement("h2"); traitTxt3.innerHTML = "DRINKS";
    let traitImg3 = new Image(); traitImg3.src = Drink;
    trait3.appendChild(traitTxt3); trait3.appendChild(traitImg3);
    traits.appendChild(trait3);

    sectionTop.appendChild(traits);
    section1.appendChild(sectionTop);

    let section1Message = document.createElement("div");
    section1Message.id = "sectionMessage";
    section1Message.innerHTML = "Our weekly rotating menu is curated using sustainable methodologies with the help from local farmers and suppliers."
    section1.appendChild(section1Message);

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
    tastingTxtP.innerHTML = "Taste our unique liqueur combinations"
    tastingTxt.appendChild(tastingTxtP);
 
    let tastingTxtBtn = document.createElement("button");
    tastingTxtBtn.innerHTML = "View Menu";
    tastingTxt.appendChild(tastingTxtBtn);
    tastingSection.appendChild(tastingTxt);

    let tastingImg = new Image(); tastingImg.src = Drinks; 
    tastingImg.id = "tastingImg"
    tastingSection.appendChild(tastingImg);
    tastingMenu.appendChild(tastingSection);

    return {tab, foodMenu, section1, tastingMenu};
}

export function Menu(){
    let tab = document.createElement("div");

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

    let homeTitle = document.createElement("h1");
    homeTitle.innerHTML = "About";
    tab.appendChild(homeTitle);

    let homeTag = document.createElement("h3");
    homeTag.innerHTML = "The Bruised Orange Jazz Bar";
    tab.appendChild(homeTag);
    return tab;
}

export function Reservations(){
    let tab = document.createElement("div");

    let homeTitle = document.createElement("h1");
    homeTitle.innerHTML = "Reservations";
    tab.appendChild(homeTitle);

    let homeTag = document.createElement("h3");
    homeTag.innerHTML = "The Bruised Orange Jazz Bar";
    tab.appendChild(homeTag);
    return tab;
}

export function Footer(){
    let footer = document.createElement("footer");
    let infoTitle = document.createElement("h1"); infoTitle.innerHTML = "THE BRUISED ORANGE";
    footer.appendChild(infoTitle);
    let footerBottom = document.createElement("div"); footerBottom.id = "footerBottom";

    let location = document.createElement("div");
    let locationTitle = document.createElement("h2"); locationTitle.innerHTML = "LOCATION";
    let locationAddress = document.createElement("p"); locationAddress.innerHTML = "123 REAL PLACE STREET <br>CITY, ST 12345";
    location.appendChild(locationTitle); location.appendChild(locationAddress);
    footerBottom.appendChild(location);


    let contact = document.createElement("p");
    let contactTitle = document.createElement("h2"); contactTitle.innerHTML = "CONTACT";
    let contactAddress = document.createElement("p"); contactAddress.innerHTML = "(123) 456-7890 <br> INFO@THEBRUISEDORANGE.COM";
    contact.appendChild(contactTitle); contact.appendChild(contactAddress);
    footerBottom.appendChild(contact);

    let visit = document.createElement("div");
    let visitTitle = document.createElement("h2"); visitTitle.innerHTML = "HOURS";
    let visitWeekDay = document.createElement("p"); visitWeekDay.innerHTML = "MONDAY - THURSDAY <br> 11AM - 11PM";
    let visitWeekEnd = document.createElement("p"); visitWeekEnd.innerHTML = "FRIDAY - SUNDAY <br> 5PM - 2AM";
    visit.appendChild(visitTitle); visit.appendChild(visitWeekDay); visit.appendChild(visitWeekEnd);
    footerBottom.appendChild(visit);

    footer.appendChild(footerBottom);

    footer.appendChild(document.createElement("hr"));
    let myInfo = document.createElement("p"); myInfo.innerHTML = "The Bruised Orange - A Odin Restaurant - Created By Carrima Hewitt - Copyright 2023";
    myInfo.id = "myInfo";
    footer.appendChild(myInfo);
    return footer;
}

//Initial Page Load setup
let content = document.querySelector("#content");
content.appendChild(NavBar());
content.appendChild(Home().tab);
content.appendChild(Home().foodMenu);
content.appendChild(Home().section1);
content.appendChild(Home().tastingMenu);
content.appendChild(Footer());