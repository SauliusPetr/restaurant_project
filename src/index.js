import createHome from "./modules/home";
import { createMenu } from "./modules/menu";

// createMenu();
createHome();

let homePickOptions = document.querySelector(".home-pick-options").childNodes;
let content = document.querySelector('#content');
let currentPage = 'home';
homePickOptions.forEach((option) => {
  option.addEventListener("click", () => {
    let optionPicked = (option.classList[0]).toLowerCase();
    if(optionPicked === currentPage){
        return;
    }
    console.log(optionPicked);
    content.innerHTML = '';
    switch (optionPicked){
        case 'home':
            createHome();
            currentPage = 'home';
        case 'menu':
            createMenu();
            currentPage = 'menu';
    }
  });
});

//load page
//add event listener on selec-options
//get each of the
