//Initial Page Load setup
import { NavBar, Home } from "./shell";
let content = document.querySelector("#content");
content.appendChild(NavBar());
content.appendChild(Home());
