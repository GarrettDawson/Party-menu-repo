const menu = [
  {
    id: 1,
    title: "10 peice salsa orchestra",
    category: "music",
    price: 3500,
    img: "./images/item-1.jpeg",
    desc: `The 10 peice Salsa band's infectious grooves will keep your party dancing all night.  The sounds of Classic Salsa, Salsa Dura, Mambo and Cha Cha will energize  your gathering.  `,
  },
  {
    id: 2,
    title: "belly dancers",
    category: "dance",
    price: 3000,
    img: "./images/item-2.jpeg",
    desc: `Persian, Egyptian, Turkish and Tribal Fusion dance trope that will inspire and entertain with their art.  `,
  },
  {
    id: 3,
    title: "basic karaoke",
    category: "karaoke",
    price: 900,
    img: "./images/item-3.jpeg",
    desc: `Full sound sytem and two microphones provided. Smiles are free.`,
  },
  {
    id: 4,
    title: "chamber music quintet",
    category: "music",
    price: 3000,
    img: "./images/item-4.jpeg",
    desc: `Chamber music is a form of classical music that is composed for a small group of instruments. This string quintet will move and soothe your audience.`,
  },
  {
    id: 5,
    title: "salsa dancers",
    category: "dance",
    price: 3000,
    img: "./images/item-5.jpeg",
    desc: `Our Salsa dancers will turn up the heat at your gathering. The music and dance from Cuba, Puerto Rico and NYC will make your party unforgettable.   `,
  },
  {
    id: 6,
    title: "video karaoke",
    category: "karaoke",
    price: 1500,
    img: "./images/item-6.jpeg",
    desc: `Be transformed into your favorite music videos. Full sound sytem, two microphones and a 15 x 20 high definition video screen provided.`,
  },
  {
    id: 7,
    title: "high energy funk explosion",
    category: "music",
    price: 3500,
    img: "./images/item-7.jpeg",
    desc: `James Brown, George Clinton, Curtis Mayfeild, Sly and the Family Stone Funk classics. Need we say more? `,
  },
  {
    id: 8,
    title: "west african dance troupe ",
    category: "dance",
    price: 3000,
    img: "./images/item-8.jpeg",
    desc: `Bring the energy up with the traditonal dances of Ghana, Mali, Senegal and Ivory Coast. The irresistable rhythm and dance will keep you moving and grooving.  `,
  },
  {
    id: 9,
    title: "rockstar karaoke",
    category: "karaoke",
    price: 2000,
    img: "./images/item-9.jpeg",
    desc: `This is a full concert experence. Full sound sytem, two microphones and a 15 x 20 high definition video screen, 15 x 30 stage and full light show with smoke machines provided. `,
  },
  {
    id: 10,
    title: "tier 1 energy jam",
    category: "vip",
    price: 13000,
    img: "./images/item-10.jpeg",
    desc: `This is the ultimate party package and our most lavish offering. Choose two from the music category, two from the dance category and two from the karaoke category.`,
  },
];
// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
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
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
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
