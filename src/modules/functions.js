import { createMenu } from "./menu";
import createHome from "./home";
import { createContact } from "./contact";


function createHeader(pageTitle) {
  let header = document.createElement("div");
  header.className = "header";
  let headerText = document.createElement("div");
  headerText.className = "title-text";
  headerText.textContent = pageTitle;
  header.appendChild(headerText);
  return header;
}

function createPickOptions(optionList, divName, displayText) {
  const pickOptions = document.createElement("div");
  pickOptions.className = divName;

  for (let i = 0; i < optionList.length; i++) {
    let selection = document.createElement("div");
    selection.className = `${optionList[i].className} option`;

    let content = document.createElement("img");
    content.className = `option-img`;
    content.src = optionList[i].imgPath;
    selection.appendChild(content);

    if (!displayText) {
      pickOptions.appendChild(selection);
      continue;
    }

    let optionText = document.createElement("div");
    optionText.className = `option-text`;
    optionText.innerHTML = optionList[i].optionText;
    selection.appendChild(optionText);

    if (optionList[i].price) {
      let optionPrice = document.createElement("div");
      optionPrice.className = `option-price`;
      optionPrice.innerHTML = optionList[i].price;
      selection.appendChild(optionPrice);
    }
    pickOptions.appendChild(selection);
  }

  return pickOptions;
}

function createNav(optionList, divName) {
  let navDiv = document.querySelector('#content');

  navDiv.appendChild(createPickOptions(optionList, divName, false));
 let optionDivList = document.querySelector(".nav-pick-options").childNodes;
 addNavigationListener(optionDivList);
  return navDiv;
}

function addNavigationListener(optionDivList) {
  let content = document.querySelector("#content");
  let navBar = document.querySelector('.nav-pick-options');
  // let optionDivList = document.querySelector(".nav-list").childNodes;
  optionDivList.forEach((option) => {
    
    option.addEventListener("click", () => {
      let optionPicked = option.classList[0].toLowerCase();
       
      if (optionPicked === window.currentPage) {
        return;
      }
      //navBar.innerHTML = "";
      content.innerHTML = "";
      switch (optionPicked) {
        case "home":
          window.currentPage = "home";
          createHome();
          break;
        case "menu":
          window.currentPage = "menu";
          console.log('aqui');
          createMenu();
          break;
        case "contact":
          window.currentPage = "contact";
          createContact();
          break;
      }
    });
  });
}

export { createPickOptions, createHeader, createNav, addNavigationListener };
