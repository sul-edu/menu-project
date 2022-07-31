// console.log(menu);

const sectionCenter = document.querySelector('.section-center');

window.addEventListener('DOMContentLoaded', function(){
    // console.log(sectionCenter);
   displayMenuItems(menu);
});


//selecting all buttons for filters

const allBtns = document.querySelectorAll('.btn');

allBtns.forEach((btn) => {
  btn.addEventListener('click', function(e){
        const buttonValue = e.target.value;
    const menuCategory = menu.filter((menuItem) => {      
     if(buttonValue === menuItem.category){
        console.log(menuItem);
       return menuItem;
      }
    });

      if(buttonValue ==='all'){
        displayMenuItems(menu);
      }
      else{
        displayMenuItems(menuCategory);
      }  
    console.log(menuCategory);

  })
})









//CREATE A FUNCTION WITH ALL THOUGH AND INVOKING IN FUNCTION

const displayMenuItems = (menuItems) => {
  let displayItem = menuItems.map((item) => {
    // console.log(item);
    return `<article class="menu-item">
    <img class="photo" src=${item.img} alt=${item.title}/>
    <div class="item-info">
      <header>
        <h4 class="item-title">${item.title}</h4>
        <h4 class="price">$${item.price}</h4>
      </header>
      <p class="item-text">${item.desc}              
      </p>
    </div>
  </article>`

});
displayItem = displayItem.join('');
// console.log(displayItem);
sectionCenter.innerHTML = displayItem;
}
