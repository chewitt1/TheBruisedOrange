import Banner from "./images/home_banner.jpg";
import Logo from "./images/logo.png";
import Food from "./images/food.jpg";
import Drinks from "./images/drinks.jpg";
import BigLogo from "./images/logo_big.png";
import Jazz from "./images/jazz.jpg";
import Drink from "./images/drink.jpg";
import Meal from "./images/meal.jpg"

const DOM = (() =>{
    const createElement = (type, content, isClass, selector, attribute) => {
        let element = document.createElement(type);
        if (content != null){
            (type === "img") ? (element.src = content) : (element.innerHTML = content);
        }
        if (selector != null){
            if (isClass === true){
                for(var i = 0; i < selector.length; i++){
                    element.classList.add(selector[i]);
                }
            }else{(element.id = selector);}
        }
        if(attribute != null){
            element.setAttribute(attribute[0], attribute[1]);
        }
        return element;
    };
    const addChildren = (...rest) => {
        let parent = rest[0];
        let children = rest.slice(1);
        
        for(var i = 0; i < children.length; i++){
            parent.appendChild(children[i]);
        }
    };
    return { createElement, addChildren };
})();

export function NavBar(){
    let navBar = document.createElement("header");
    let titleBox = DOM.createElement("div", null, false, "titleBox");
    let title = DOM.createElement("h1", "<i>Bruised</i>");
    let logoImg = DOM.createElement("img", Logo, false, "logo");
    DOM.addChildren(titleBox, title, logoImg);

    let ul = DOM.createElement("ul");
    DOM.addChildren(ul, (NavItem("Home", 1)), (NavItem("Menu", 2)), (NavItem("About", 3)), (NavItem("Reservations", 4)));
    let nav = DOM.createElement("nav"); 
    DOM.addChildren(nav, ul);

    DOM.addChildren(navBar, titleBox, nav);
    return navBar;
}

function NavItem(txt, val){
    return (val == 1) ? (DOM.createElement("li", txt, true, ["navItem", "curr"], ["data-tab" , val])) 
                      : (DOM.createElement("li", txt, true, ["navItem"], ["data-tab" , val]));
}

export function Home(){
    //HOME
    let home = DOM.createElement("div", null, true, ["home"]);
    let banner = DOM.createElement("img", Banner, true, ["background"]);
    let textDiv = DOM.createElement("div", null, false, "welcome-txt");
    textDiv.appendChild(DOM.createElement("h1", "Where jazz meets <br>sustainability"));

    DOM.addChildren(home, banner, textDiv);

    //FOOD MENU
    let foodMenu = DOM.createElement("div", null, false, "foodMenu");
    let foodSection = DOM.createElement("div", null, true, ["colorOverlay"]);
    let foodImg = DOM.createElement("img", Food, false, "foodImg");
    let foodTxt = DOM.createElement("div", null, false, "foodMenuTxt");

    DOM.addChildren(foodTxt, DOM.createElement("h2", "FOOD MENU", true, ["light-shadow"]), 
                             DOM.createElement("p", "Experience ingredient-first dining"),
                             DOM.createElement("button", "View Menu"));
    DOM.addChildren(foodSection, foodImg, foodTxt);
    foodMenu.appendChild(foodSection);
    
    //Section 1
    let section1 = DOM.createElement("section", null, false, "homeSection");
    let sectionTop = DOM.createElement("div");

    let traits = DOM.createElement("div", null, false, "traits");

    let trait1 = DOM.createElement("div", null, true, ["trait"]);
    DOM.addChildren(trait1, DOM.createElement("h2", "JAZZ"), 
                             DOM.createElement("img", Jazz));

    let trait2 = DOM.createElement("div", null, true, ["trait"]);
    DOM.addChildren(trait2, DOM.createElement("h2", "FOOD"), 
                            DOM.createElement("img", Meal, false, "traitImg"));
    
    let trait3 = DOM.createElement("div", null, true, ["trait"]);
    DOM.addChildren(trait3, DOM.createElement("h2", "DRINKS"), 
                            DOM.createElement("img", Drink));
    
    DOM.addChildren(traits, trait1, trait2, trait3);
    DOM.addChildren(sectionTop, DOM.createElement("img", BigLogo), traits);

    let section1Message = DOM.createElement("div", "Our weekly rotating menu is curated using sustainable methodologies with the help from local farmers and suppliers.", false, "sectionMessage");
    
    DOM.addChildren(section1, sectionTop, section1Message);

    //Tasting Menu Section
    let tastingMenu = DOM.createElement("div", null, false, "tastingMenu");
    let tastingSection = DOM.createElement("div", null, true, ["colorOverlay2"]);
    let tastingTxt = DOM.createElement("div", null, false, "tastingMenuTxt");

    DOM.addChildren(tastingTxt, DOM.createElement("h2", "TASTING MENU"), 
                                DOM.createElement("p", "Taste our unique liqueur combinations"),
                                DOM.createElement("button", "View Menu"));
    
    DOM.addChildren(tastingSection, tastingTxt, DOM.createElement("img", Drinks, false, "tastingImg"));

    tastingMenu.appendChild(tastingSection);
    return {home, foodMenu, section1, tastingMenu};
}

export function Menu(){
    let menu = document.createElement("div");
    menu.id = "menu";
    let appetizersTitle = document.createElement("h1"); appetizersTitle.innerHTML = "APPETIZERS";
    menu.appendChild(appetizersTitle);
    let appetizers = document.createElement("section");
    appetizers.classList.add("menu-section");
    for(let i = 0; i < 4; i++){
        appetizers.appendChild(
            MenuRow(
                MenuItem("Calamari", 15, "Just the calamari from the sea and stuff. You know the vibes."),
                MenuItem("Chicken Skewers", 12, "The stuff with wings and feathers that can't fly. Served without the feathers on a stick.")
            )
        );
    }
    menu.appendChild(appetizers);

    let mainDishesTitle = document.createElement("h1"); mainDishesTitle.innerHTML = "MAIN DISHES";
    menu.appendChild(mainDishesTitle);
    let mainDishes = document.createElement("section");
    mainDishes.classList.add("menu-section");
    for(let i = 0; i < 4; i++){
        mainDishes.appendChild(
            MenuRow(
                MenuItem("Fish", 35, "Just the fish from the sea and stuff. You know the vibes."),
                MenuItem("Steak", 40, "You can have it anyway you want it. Almost alive or charred. We don't judge here.")
            )
        );
    }
    menu.appendChild(mainDishes);

    let dessertsTitle = document.createElement("h1"); dessertsTitle.innerHTML = "DESSERTS";
    menu.appendChild(dessertsTitle);
    let desserts = document.createElement("section");
    desserts.classList.add("menu-section");
    for(let i = 0; i < 4; i++){
        desserts.appendChild(
            MenuRow(
                MenuItem("Cake", 14, "The Yummy Stuff"),
                MenuItem("Pecan Pie", 40, "The other yummy stuff")
            )
        );
    }
    menu.appendChild(desserts);
    return menu;
}


function MenuRow(item1, item2){
    let menuRow = document.createElement("div");
    menuRow.classList.add("menu-row");
    menuRow.appendChild(item1); menuRow.appendChild(item2);
    return menuRow;
}

function MenuItem(name, price, description){
    let itemName = document.createElement("h3");
    itemName.innerHTML = name;
    let itemDescription = document.createElement("p");
    itemDescription.innerHTML = "<i>" + description + "</i>";
    let itemPrice = document.createElement("p");
    itemPrice.innerHTML = price
    
    let menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    menuItem.appendChild(itemName); menuItem.appendChild(itemDescription); menuItem.appendChild(itemPrice); 
    return menuItem;
}

export function About(){
    let about = document.createElement("div");
    about.id = "about";

    let aboutTitle = document.createElement("h1");
    aboutTitle.innerHTML = "About";
    about.appendChild(aboutTitle);

    let aboutTag = document.createElement("h3");
    aboutTag.innerHTML = "The Bruised Orange Jazz Bar";
    about.appendChild(aboutTag);

    let aboutSection = document.createElement("div");
    aboutSection.id = "about-section";
    aboutSection.innerHTML = "Founded in 2023, The Bruised Orange @copy; is a fake jazz bar and restaurant." + 
    "It was thought up and designed by Carrima Hewitt for the Odin Project's Restauarant project." + 
    "While it's not perfect, it was a labor or love and will be continuously improved because it is so fun to work on.";
    about.appendChild(aboutSection);
    return about;
}

export function Reservations(){
    let reservation = document.createElement("div");
    reservation.id = "reservation";

    let reservationTitle = document.createElement("h1");
    reservationTitle.innerHTML = "Reservations";
    reservation.appendChild(reservationTitle);

    let reservationTag = document.createElement("h3");
    reservationTag.innerHTML = "The Bruised Orange Jazz Bar";
    reservation.appendChild(reservationTag);

    let reservationSection = document.createElement("div");
    reservationSection.id = "reservation-section";

    let reservationForm = document.createElement("form");
    reservationForm.id = "reservation-form";
    reservationForm.appendChild(inputRow("name", "text"));
    reservationForm.appendChild(inputRow("guests", "number"));
    reservationForm.appendChild(inputRow("time", "number"));
    reservationForm.appendChild(inputRow("email", "email"));
    reservationForm.appendChild(inputRow("phone number", "tel"));

    let reserveBtn = document.createElement("button"); reserveBtn.innerHTML = "RESERVE";

    reservationSection.appendChild(reservationForm);
    reservation.appendChild(reservationSection);

    return reservation;
}

function inputRow(name, type){
    let label = document.createElement("label"); 
    label.innerHTML = (name.toUpperCase()); label.setAttribute("for", name);
    let inputVal = document.createElement("INPUT"); 
    inputVal.setAttribute("type", type); inputVal.setAttribute("name", name);

    let inputRow = document.createElement("div");
    inputRow.classList.add("input-row");
    inputRow.appendChild(label); inputRow.appendChild(inputVal);

    return inputRow;
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
content.appendChild(Home().home);
content.appendChild(Home().foodMenu);
content.appendChild(Home().section1);
content.appendChild(Home().tastingMenu);
content.appendChild(Footer());