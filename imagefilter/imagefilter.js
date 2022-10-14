const menu = [
    {
      id: 1,
      category: "mobile",
     img: "images/mobile1.avif",
    
    },
    {
      id: 2,
      category: "mobile",
      img: "images/mobile2.avif",
    
    },
    {
      id: 3,
    category: "mobile",
      img: "images/mobile3.avif",
    },
    {
      id: 4,
    category: "camera",
      img: "images/camera1.avif",
    },
    {
      id: 5,
       category: "camera",
      img: "images/camera2.avif",
      
    },
    {
      id: 6,
   category: "camera",
       img: "images/camera3.avif",
     
    },
    {
      id: 7,
     
      category: "watch",
     
      img: "images/watch1.avif",
    },
    {
      id: 8,
       category: "watch",
      img: "images/watch2.avif",
    
    },
    {
      id: 9,
  category: "watch",
    img: "images/watch3.avif",
      
    },
    {
      id: 10,
         category: "shoe",
   img: "images/shoe1.avif",
     
    },
    {
        id: 11,
           category: "shoe",
     img: "images/shoe2.avif",
       
      },
      {
        id: 12,
           category: "shoe",
     img: "images/shoe3.avif",
       
      },
  ];
  const sectionCenter = document.querySelector(".section-center");
  const btnContainer = document.querySelector(".btn-container");

  window.addEventListener("DOMContentLoaded", function () {
    diplayMenuItems(menu);
    displayMenuButtons();
  });
  function diplayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (p) {
      
  
      return `<article class="menu-item">
            <img src=${p.img}  class="photo" />
           
           
          </article>`;
    });
    displayMenu = displayMenu.join("");
    
  
    sectionCenter.innerHTML = displayMenu;
  }

  function displayMenuButtons() {
    const categories = menu.reduce(
      function (values, item) {
        if (!values.includes(item.category)) {
          values.push(item.category);
        }
        return values;
      },
      ["all"]
    );
    const categoryBtns = categories
      .map(function (category) {
        return `<button type="button" class="filter-btn" id=${category}>
            ${category}
          </button>`;
      })
      .join("")
  
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
   
  
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        
        const category = e.currentTarget.id;
        const menuCategory = menu.filter(function (menuItem) {
        
          if (menuItem.category === category) {
            return menuItem;
          }
        });
        if (category === "all") {
          diplayMenuItems(menu);
        } else {
          diplayMenuItems(menuCategory);
        }
      });
    });
  }