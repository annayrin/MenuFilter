import { menu } from "./data.js";

// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
const buttons = document.querySelectorAll(".filter-btn")
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
});




function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
            <img src=${item.img} alt=${item.title} class="photo" />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {

}

buttons.forEach(btn => {
  btn.addEventListener("click", () =>{
    let category = btn.getAttribute("data-id");
    if (category === "all"){
     return displayMenuItems(menu);
    }
    let filteredMenu = menu.filter(item => item.category === category);
    return displayMenuItems(filteredMenu);
  })

})

let searchtext = "";
let searchedMenu;
let search = document.getElementById("search");

  search.addEventListener("keyup", (e) => {
    searchtext = e.target.value;
    searchedMenu = menu.filter(item => item.desc.indexOf(searchtext) !== -1);
    refresh();
  })


let id;

function refresh(){
  if (id !== undefined){
    clearTimeout(id);
  }
    id = setTimeout(()=>{
      displayMenuItems(searchedMenu);
    },1000)
}