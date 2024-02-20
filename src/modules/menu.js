import {
  createHeader,
  createPickOptions,
  createNav,
  addNavigationListener,
} from "./functions";
import { menuOptions, pageTitle, optionList } from "./content";

function createMenu() {
  let content = document.querySelector("#content");
 createNav(optionList, "nav-pick-options nav-list");
  content.appendChild(createHeader(pageTitle));
  content.appendChild(
    createPickOptions(menuOptions, "menu-pick-options", true)
  );
}
export { createMenu };
