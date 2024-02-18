import createHome from "./modules/home";
import { createMenu } from "./modules/menu";

// createMenu();
createHome();

let homePickOptions = document.querySelector(".home-pick-options").childNodes;
let content = document.querySelector('#content');
// homePickOptions.forEach((option) => {
//   option.addEventListener("click", () => {
//     let optionPicked = (option.classList[0]).toLowerCase();
//     if(optionPicked === currentPage){
//         return;
//     }
//     content.innerHTML = '';
//     switch (optionPicked){
//         case 'home':
//             createHome();
//             currentPage = 'home';
//         case 'menu':
//             createMenu();
//             currentPage = 'menu';
//     }
//   });
// });
