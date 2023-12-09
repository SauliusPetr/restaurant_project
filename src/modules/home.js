import {  footerText,pageTitle,optionList } from "./content";
import { createPickOptions,createHeader } from "./functions";

function createHome(){
    let content = document.getElementById('content');
    content.appendChild(createHeader(pageTitle));
    content.appendChild(createPickOptions(optionList,"home-pick-options"));
    content.appendChild(createFooter());
}

function createFooter(){
    const footer = document.createElement('div');
    footer.className = "footer";

    const footerInfo = document.createElement('div');
    footerInfo.className = "footer-info";
    footerInfo.innerHTML = footerText.mainText;

    const attributions = document.createElement('ul');
    attributions.className = "footer-attributions";
    attributions.innerHTML = footerText.attributions;

    footer.appendChild(footerInfo);
    footer.appendChild(attributions);

    return footer;
}

export default createHome;