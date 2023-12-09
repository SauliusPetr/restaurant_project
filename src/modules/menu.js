 import { createHeader,createPickOptions } from "./functions";
 import { menuOptions,pageTitle } from "./content";

function createMenu(){
    let content = document.getElementById('content');
    content.appendChild(createHeader(pageTitle));
    content.appendChild(createPickOptions(menuOptions,"menu-pick-options"));
}
export {createMenu};