//have text in middle of screen "Let's work together"
//bellow will be the email contact@bytesized.com
import { contactInfo } from "./content";
import { addNavigationListener } from "./functions";
import { createNav } from "./functions";
import { optionList } from "./content";

function createContact(){
    let contentDiv = document.querySelector('#content');
    

    let displayContactDiv = document.createElement('div');
    displayContactDiv.className = 'contact-info';

    let contactText = document.createElement('div');
    contactText.className = 'contactText';
    contactText.innerHTML = contactInfo.contactText;

    let contactEmail= document.createElement('div');
    contactEmail.classList = ' contactEmail';
    contactEmail.innerHTML = contactInfo.contactEmail;

    displayContactDiv.appendChild(contactText);
    displayContactDiv.appendChild(contactEmail);

    createNav(optionList,"nav-pick-options nav-list");
    contentDiv.appendChild(displayContactDiv);

    addNavigationListener();
}

export {createContact};